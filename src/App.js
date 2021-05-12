import React from 'react';
import { Route, BrowserRouter, Switch } from  'react-router-dom'

import Orders from './Inventory/Tables/Orders'
import Inventory from './Inventory/Tables/Inventory'
import Navbar from './Main/Navbar'
import PageNotFound from './Main/PageNotFound'
import QuickOrder from './Inventory/QuickOrder/FormContainer'
import GeneralOrder from './Inventory/GeneralOrder/FormContainer'
import EZLabX from './EZLabX/EZLabX'
// import Dashboard from './Dashboard/Dashboard'
import Levels from "./Levels/Levels";
import Calendar from "./Calendar/Schedule";
import InteractiveHomePage from './InteractiveHomePage';
import InventoryTable from './Admin/InventoryManager/InventoryTable'
import UserTable from './Admin/UserManager/UserTable'
import LevelManager from './Admin/LevelManager/LevelManager'
import AdminUserForm from "./Admin/UserManager/AdminUserForm"
import AdminInventoryForm from "./Admin/InventoryManager/AdminInventoryForm"

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-schedule/styles/material.css";


import './Inventory/Inventory.css'
import './Main/Main.css'
import './EZLabX/EZLabX.css'
import './Admin/Admin.css'
import './Main/Tables.css'
import './Main/Forms.css'


function App() {
  return (
    <div>
      <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path = '/home'>
                <InteractiveHomePage />
              </Route>
              
              <Route exact path = '/'>
                <EZLabX />
              </Route>

              <Route exact path = '/inventory'>
                <Inventory />
              </Route>

              <Route exact path = '/inventory/quickOrder'>
                <QuickOrder />
              </Route>

              <Route exact path = '/inventory/generalOrder'>
                <GeneralOrder />
              </Route>

              <Route exact path = '/inventory/orders'>
                <Orders />
              </Route>

              <Route exact path = '/levels'>
                <Levels />
              </Route>

              <Route exact path = '/calendar'>
                <Calendar/>
              </Route>

              {/* <Route exact path = '/dashboards'>
                <Dashboard />
              </Route> */}

              <Route exact path = '/admin/inventory'>
                <InventoryTable />
              </Route>

              <Route exact path = '/admin/users'>
                  <UserTable />
              </Route>

              <Route exact path = '/admin/levels'>
                  <LevelManager />
              </Route>

              <Route exact path = '/admin/users/form'>
                  <AdminUserForm />
              </Route>

              <Route exact path = '/admin/inventory/form'>
                  <AdminInventoryForm />
              </Route>

              <Route path = '*'>
                <PageNotFound />
              </Route>

            </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
