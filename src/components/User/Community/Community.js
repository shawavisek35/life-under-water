import React from "react";
import {NavLink, Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import Events from "./Events";
import Gallery from "./Gallery";
import Meetups from "./Meetups";
import Info from "./Info";

export default function Community() {
  const { path } = useRouteMatch();

  return (
    <div className="flex flex-wrap py-2">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-lightBlue-500 rounded">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <NavLink className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to={`${path}/info`}>
                Beach Protector
              </NavLink>
              <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div className="flex lg:flex-grow items-center" id="example-navbar-info">
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to={`${path}/events`}>
                    Events
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to={`${path}/gallery`}>
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to={`${path}/meetups`}>
                    Meetups
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path={`${path}/info`} component={Info} />  
        <Route path={`${path}/events`} component={Events} />
        <Route path={`${path}/gallery`} component={Gallery} />
        <Route path={`${path}/meetups`} component={Meetups} />
        <Redirect to={`${path}/info`} />
      </Switch>
    </div>
    // <div className="bg-white p-4 flex flex-col">
    //   <div className="flex gap-4 p-4">
    //     <div>
    //       <h1 className="text-6xl">Beach Protector</h1>
    //       <p className="w-1/2 py-6 px-4 text-xl">
    //         Hello, We are Beach Protectors! based in Mandarmani we host cleanups
    //         upto 6 times a month, our goal is to make the beach a safer place
    //         and preserve aquatic life with the nature around it. Feel free to
    //         join us and ask us questions
    //       </p>
    //     </div>
    //     <div>
    //       <div>
    //         <WrappedMap
    //           isMarkerShown={true}
    //           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDMNy3MiJct_jGbjT1svGZGy7rN8wcSC8A"
    //           loadingElement={<div style={{ height: `100%` }} />}
    //           containerElement={<div style={{ height: `100vh` }} />}
    //           mapElement={<div style={{ height: `100%` }} />}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div>by</div>
    // </div>
  );
}
