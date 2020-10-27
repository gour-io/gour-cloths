Complete React (w/ Redux, Hooks, GraphGL) 
-----------------------------------------------------------

crwn-clothing project (sections 5-6) - LOCAL IMAGES

Local background images of categories and shop items are inside
of the 'images/' directory.  
This directory should be placed inside the 'public/' directory of 
the 'crwn-clothing' project.  

The 'shop.data.js' file is modified to include the local imageUrl, 
having the http links kept but commented out.  

For example, in 'directory.component.jsx':  

-------------------------------------------------
import SECTIONS_DATA from "./sections.data.js";

(inside 'class Directory')

    this.state = {
        sections: SECTIONS_DATA
    }

    (etc)
-------------------------------------------------


