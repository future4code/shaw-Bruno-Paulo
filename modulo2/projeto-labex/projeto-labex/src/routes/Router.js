import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '../Pages/Index';
import Login from '../Pages/Login';
import ListTrips from '../Pages/ListTrips';
import TripDetails from '../Pages/TripDetails';
import AdminHome from '../Pages/AdminHome';
import ApplicationForms from '../Pages/ApplicationForms';
import CreateTrip from '../Pages/CreateTrip';
import ErrorPage from '../Pages/ErrorPage';


function PageSelector(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<Index/>}/>
                <Route path ="login"  element = {<Login/>}/>
                <Route path ="trips/list"  element = {<ListTrips/>}/>
                <Route path ="admin/trips/:id"  element = {<TripDetails/>}/>
                <Route path ="admin/trips/list"  element = {<AdminHome/>}/>
                <Route path ="trips/application"  element = {<ApplicationForms/>}/>
                <Route path ="admin/trips/create"  element = {<CreateTrip/>}/>
                <Route path ="*"  element = {<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageSelector;
