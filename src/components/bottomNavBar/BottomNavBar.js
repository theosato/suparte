import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 375
  },
  content: {
    width: 50
  }
});

const paths = [
  {
    to:"/",
    label:"Home",
    value:"home",
    icon: HomeIcon
  },
  {
    to:"/",
    label:"Home",
    value:"home",
    icon: HomeIcon
  },
  {
    to:"/",
    label:"Home",
    value:"home",
    icon: HomeIcon
  },
  {
    to:"/",
    label:"Home",
    value:"home",
    icon: HomeIcon
  },
  {
    to:"/",
    label:"Home",
    value:"home",
    icon: HomeIcon
  },
]

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction 
        component={Link} to="/" 
        label="Home" 
        value="home" 
        icon={<HomeIcon />} 
        className={classes.content}/>

      <BottomNavigationAction 
        component={Link} to="/" 
        label="Search" 
        value="search" 
        icon={<SearchIcon />} 
        className={classes.content} />

      <BottomNavigationAction
        component={Link} to="/" 
        label="Cart" 
        value="cart" 
        icon={<ShoppingCartOutlinedIcon />} 
        className={classes.content} />

      <BottomNavigationAction
        component={Link} to="/" 
        label="Favorite" 
        value="favorite" 
        icon={<FavoriteIcon />} 
        className={classes.content} />

      <BottomNavigationAction 
        component={Link} to="/" 
        label="Profile" 
        value="profile" 
        icon={<PersonOutlineOutlinedIcon />} 
        className={classes.content} />

    </BottomNavigation>
  );

}

// {items.map (
//   item => <BottomNavigationAction
//     component={Link}
//     to={item.to}
//     label={item.label}
//     value={item.value}
//     icon= {item.icon}
//     className={classes.content}
//   />
// )}
// </BottomNavigation>
// );

// }