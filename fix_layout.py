import os
import re

files = [
    'src/pages/conferences/ICCSD.tsx',
    'src/pages/conferences/GSAI.tsx',
    'src/pages/conferences/WCCC.tsx',
    'src/pages/conferences/ICBT.tsx',
    'src/pages/conferences/IDSS.tsx'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Step 1: Find Registration Sidebar
    reg_start = content.find('{/* Right Column: Registration Sidebar */}')
    
    # We want to grab everything from reg_start down to the end of the sidebar wrapper div.
    # The sidebar wrapper ends right before the closing of the grid:
    #             </div>
    #           </div>
    #         </div>
    #       </section>
    
    reg_regex = re.compile(r'\{\/\* Right Column: Registration Sidebar \*\/\}\s*<div.*?relative">\s*<motion\.div.*?>.*?<\/p>\s*<\/div>\s*<\/motion\.div>\s*<\/div>', re.DOTALL)
    reg_match = reg_regex.search(content)
    
    if not reg_match:
        print("Could not find Registration Sidebar in", file)
        continue
        
    registration_code = reg_match.group(0)
    
    # Remove registration code from its original position
    new_content = content.replace(registration_code, '')
    
    # We also need to fix the closing tags. Wait, let's just do a string replacement around the About / Tracks border.
    
    # Let's find:
    #                 </div>
    #               </motion.div>
    # 
    #               {/* Tracks/Themes Cards */}
    
    about_end = re.compile(r'(<\/div>\s*<\/motion\.div>)\s*(\{\/\* Tracks\/Themes Cards \*\/\})', re.DOTALL)
    new_content = about_end.sub(r'\1\n            </div>\n\n            ' + registration_code.replace('\\', '\\\\') + r'\n          </div>\n\n          <div className="space-y-24 mt-24">\n            \2', new_content, 1)

    # Finally, remove the extra closing tags left behind at the bottom where Registration used to live.
    # Original end was:
    #               </motion.div>
    # 
    #             </div>
    #             
    #           </div>
    #         </div>
    #       </section>
    
    # It will now look like:
    #               </motion.div>
    # 
    #             </div>
    #             
    #             
    #           </div>
    #         </div>
    #       </section>
    # We should delete one `</div>` wrapper because we closed `grid lg:grid-cols-3` already.

    cleanup_regex = re.compile(r'(<\/div>\s*<\/motion\.div>)\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>', re.DOTALL)
    new_content = cleanup_regex.sub(r'\1\n          </div>\n        </div>\n      </section>', new_content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Fixed", file)
