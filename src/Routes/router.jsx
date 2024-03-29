import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AllPropertiesCard from "../Pages/AllProperties/AllPropertiesCard";
import Property from "../Pages/Property/Property";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProperty from "../Dashboard/Agent/AddProperty";
import MyAddedProperties from "../Dashboard/Agent/MyAddedProperties";
import UpdateProperty from "../Dashboard/Agent/UpdateProperty";
import MySoldProperties from "../Dashboard/Agent/MySoldProperties";
import OfferedProperties from "../Dashboard/Agent/OfferedProperties";
import Profile from "../Dashboard/Agent/Profile";
import ManageProperties from "../Dashboard/Admin/ManageProperties";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageReviews from "../Dashboard/Admin/ManageReviews";
import MyWishlist from "../Dashboard/Member/MyWishlist";
import PropertyBought from "../Dashboard/Member/PropertyBought";
import MyReviews from "../Dashboard/Member/MyReviews";
import OfferProperty from "../Dashboard/Member/OfferProperty";
import WishlistOffer from "../Dashboard/Member/WishlistOffer";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
        loader: () => fetch('https://real-estate-server-one.vercel.app/add-property')
      },
      { path: '/all-properties', 
      element: <PrivateRoute><AllPropertiesCard></AllPropertiesCard></PrivateRoute> ,
      loader: () => fetch('https://real-estate-server-one.vercel.app/add-property')
    },
      {
        path: '/property/:id',
        element: <PrivateRoute><Property></Property></PrivateRoute>,
        loader: ({ params }) => fetch(`https://real-estate-server-one.vercel.app/property/${params.id}`)
      },
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },

  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      // agent nav 
      {
        path: 'add-property',
        element: (<PrivateRoute><AddProperty></AddProperty></PrivateRoute>)

      },
      {
        path: 'my-added-properties',
        element: (<PrivateRoute><MyAddedProperties></MyAddedProperties></PrivateRoute>),
        loader: () => fetch('https://real-estate-server-one.vercel.app/add-property')

      },
      {
        path: 'update-property/:id',
        element: (<PrivateRoute><UpdateProperty></UpdateProperty></PrivateRoute>),
        loader: ({ params }) => fetch(`https://real-estate-server-one.vercel.app/add-property/${params.id}`)
      

      },
      {
        path: 'my-sold-properties',
        element: (<PrivateRoute><MySoldProperties></MySoldProperties></PrivateRoute>),
        loader: () => fetch('https://real-estate-server-one.vercel.app/wishlist-offer')

      },
      {
        path: 'offered-properties',
        element: (<PrivateRoute><OfferedProperties></OfferedProperties></PrivateRoute>),
        loader: () => fetch('https://real-estate-server-one.vercel.app/wishlist-offer')

      },
      {
        path: 'profile',
        element: (<PrivateRoute><Profile></Profile></PrivateRoute>)

      },

      //admin nav
      {
        path: 'manage-properties',
        element: (<PrivateRoute><ManageProperties></ManageProperties></PrivateRoute>),
        loader: () => fetch('https://real-estate-server-one.vercel.app/add-property')
      },
      {
        path: 'manage-users',
        element: (<PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>),
        loader: () => fetch('https://real-estate-server-one.vercel.app/user')

      },
      {
        path: 'manage-reviews',
        element: (<PrivateRoute><ManageReviews></ManageReviews></PrivateRoute>)

      },
      //member nav
      {
        path: 'my-wishlist',
        element: (<PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>),
        loader: () => fetch('https://real-estate-server-one.vercel.app/wishlist')
      },
      {
        path: 'wishlist-offer/:id',
        element: (<PrivateRoute><WishlistOffer></WishlistOffer></PrivateRoute>),
        loader: ({ params }) => fetch(`https://real-estate-server-one.vercel.app/wishlist/${params.id}`)
      },
      {
        path: 'property-bought',
        element: (<PrivateRoute><PropertyBought></PropertyBought></PrivateRoute>),
        loader: () => fetch('https://real-estate-server-one.vercel.app/wishlist-offer')

      },
      {
        path: 'my-reviews',
        element: (<PrivateRoute><MyReviews></MyReviews></PrivateRoute>),
        loader : () => fetch('https://real-estate-server-one.vercel.app/reviews')

      },
      {
        path: 'offer-property',
        element: (<PrivateRoute><OfferProperty></OfferProperty></PrivateRoute>)

      },
     


    ]
  },
]);

export default router;