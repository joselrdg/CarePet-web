// import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
// import { CATEGORIES } from "../../constants/constants";

// const useStyles = makeStyles((theme) => ({
//   toolbar: theme.mixins.toolbar,
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

// export default function drawer({toolbar, handleClick}) {
//     console.log(toolbar)

//   return (
//     <div>
//       <div className={toolbar} />
//       <Divider />
//       <List>
//         {CATEGORIES.map((item, index) => (
//           <div key={item.name}>
//             <ListItem button onClick={handleClick(index)}>
//               <ListItemIcon>{ICONSCATEGORIES[index]}</ListItemIcon>
//               <ListItemText primary={item.name} />
//               {open && categoryNumber === index ? (
//                 <ExpandLess />
//               ) : (
//                 <ExpandMore />
//               )}
//             </ListItem>

//             {categoryNumber === index
//               ? CATEGORIES[categoryNumber].subcategory.map(
//                   (subcategory, idex) => (
//                     <div key={index}>
//                       <Collapse in={open} timeout="auto" unmountOnExit>
//                         <List component="div" disablePadding>
//                           {categoryNumber === 0
//                             ? petsName.map((name, index) => (
//                                 <ListItem
//                                   button
//                                   onClick={() => handleSubcategory(index)}
//                                   className={classes.nested}
//                                 >
//                                   <ListItemIcon>
//                                     <StarBorder />
//                                   </ListItemIcon>
//                                   <ListItemText primary={name} />
//                                 </ListItem>
//                               ))
//                             : null}
//                           <ListItem button className={classes.nested}>
//                             <ListItemIcon>
//                               <StarBorder />
//                             </ListItemIcon>
//                             <ListItemText primary={subcategory} />
//                           </ListItem>
//                         </List>
//                       </Collapse>
//                     </div>
//                   )
//                 )
//               : null}
//           </div>
//         ))}
//       </List>
//       <Divider />
//       {/* <List>
//         {CATEGORIES.map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{ICONSCATEGORIES[index]}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List> */}
//       <Divider />
//     </div>
//   );
// }
