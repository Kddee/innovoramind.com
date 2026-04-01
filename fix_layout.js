const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'conferences');
const files = ['ICCSD.tsx', 'GSAI.tsx', 'WCCC.tsx', 'ICBT.tsx', 'IDSS.tsx'];

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Step 1: Find where the Right Column starts.
  const rightColumnMarker = '{/* Right Column: Registration Sidebar */}';
  const regexRightColumn = new RegExp(`\\s*\\/\\* Right Column: Registration Sidebar \\*\\/[\\s\\S]*?By registering, you agree to our Terms of Service \\& Privacy Policy\\.\\n\\s*<\\/p>\\n\\s*<\\/div>\\n\\s*<\\/motion\\.div>\\n\\s*<\\/div>`);
  
  const rightMatch = content.match(regexRightColumn);
  if (!rightMatch) {
    console.log(`Could not find Right Column in ${file}`);
    continue;
  }
  
  const rightColumnCode = rightMatch[0];
  
  // Step 2: Remove the right column from its original place.
  let newContent = content.replace(rightColumnCode, '');

  // We also need to remove the closing div of the grid which comes right after the rightColumnCode!
  // It looks like:
  //          </div>
  //        </div>
  //      </section>
  // Actually, wait: the right column was followed by:
  //             </div>
  //             
  //           </div>
  //         </div>
  //       </section>
  
  // Let's refine the replacement strategy to be safer.
  
  const regexAboutEnd = new RegExp(`(\\/\\* About Section \\*\\/[\\s\\S]*?<\\/motion\\.div>)`);
  const aboutMatch = newContent.match(regexAboutEnd);
  
  if (aboutMatch) {
    const aboutSectionCode = aboutMatch[0];
    
    // Instead of doing complicated splits, let's just assemble it manually.
    // The structure:
    // ...
    //           <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
    //             <div className="lg:col-span-2 space-y-24">
    //               {/* About Section */} ... </motion.div>
    // ^ INSERT RIGHT COLUMN HERE, close the  <div className="grid... ">, open <div className="space-y-24 mt-24">
    //               {/* Tracks/Themes Cards */} ...
    //               {/* Why Attend Section */} ...
    //               {/* Speakers Section */} ... </motion.div>
    //             </div> (closing lg:col-span-2)
    // ^ REMOVE THIS div, because we already closed the grid and we are in our own full-width div now.
    
    const splitPoint = newContent.indexOf('              {/* Tracks/Themes Cards */}');
    
    const beforeSplit = newContent.substring(0, splitPoint);
    const afterSplit = newContent.substring(splitPoint);
    
    // In beforeSplit, there is:
    // <div className="lg:col-span-2 space-y-24">
    // ...about...
    // </motion.div>
    // <split point>
    
    // So right before split, we close the lg:col-span-2 div, insert the right column, close the grid div, then start a new wrapper div.
    
    let injected = beforeSplit 
       + `            </div>\n` 
       + `            ${rightColumnCode}\n`
       + `          </div>\n\n`
       + `          <div className="space-y-24 mt-24">\n`;
       
    // Now for afterSplit, it will end with:
    //               </div>
    //             </div>
    //             
    //           </div>
    //         </div>
    //       </section>
    
    // We inserted the right column and closed the grid.
    // So the trailing code in afterSplit needs one less `</div>`.
    
    // Let's just find the `            </div>\n            \n          </div>` and remove one level.
    let finalContent = injected + afterSplit;
    
    // Remove the trailing grid wrap which is now empty.
    // Around the end:
    //               </motion.div>
    //             </div> (this is the closing of lg:col-span-2 in original)
    //             
    //           </div> (this is the closing of grid in original)
    //         </div> (this is container-custom)
    
    const cleanupRegex = /<\/motion\.div>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/section>/;
    const cleanMatch = finalContent.match(cleanupRegex);
    if(cleanMatch){
         finalContent = finalContent.replace(cleanupRegex, `</motion.div>\n            </div>\n        </div>\n      </section>`);
         fs.writeFileSync(filePath, finalContent);
         console.log(`Updated ${file} successfully.`);
    } else {
         console.log(`Cleanup match failed in ${file}`);
    }

  } else {
    console.log(`Could not find About Section in ${file}`);
  }
}
