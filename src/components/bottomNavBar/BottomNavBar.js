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
  BottomNavigationAction: {
    maxWidth: 50
  }
});

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
        icon={<HomeIcon />} />
        
      <BottomNavigationAction 
        component={Link} to="/" 
        label="Search" 
        value="search" 
        icon={<SearchIcon />} />

      <BottomNavigationAction
        component={Link} to="/Success" 
        label="Cart" 
        value="cart" 
        icon={<ShoppingCartOutlinedIcon />} />

      <BottomNavigationAction
        component={Link} to="/orders" 
        label="Favorite" 
        value="favorite" 
        icon={<FavoriteIcon />} />

      <BottomNavigationAction 
        component={Link} to="/profile" 
        label="Profile" 
        value="profile" 
        icon={<PersonOutlineOutlinedIcon />} />

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