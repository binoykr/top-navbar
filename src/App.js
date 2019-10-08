import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="main-wrapper chiller-theme toggled">

        <nav class="navbar top size">

          <div class="brand">
            <a href="#">
              <img class="icon" src="https://raw.githubusercontent.com/binoykr/react-admin-ui/new-dashboard/public/imgs/b-icon.png"
                alt="Brand Icon" />
              <span>
                admin ui
              </span>
            </a>
          </div>

          <div class="content">

            <ul class="items left size">
              <li class="item size icon">
                <a id="navbar-top-close-button" class="nav-link icon" href="#">
                  <i class="fa fa-arrow-left"></i>
                </a>
              </li>
              <li class="item size icon">
                <a class="nav-link" href="#">
                  <i class="fa fa-search"></i>
                </a>
              </li>
            </ul>

            <ul class="items right size">

              <li class="item size icon dropdown">
                <a class="nav-link" href="#" data-toggle="dropdown">
                  <i class="fa fa-bell"></i>
                  <span class="badge icon badge-pill badge-danger up">3</span>
                </a>

                <div class="dropdown media right dropdown-menu">
                  <div class="header size">
                    <h5>Notifications</h5>
                    <span class="badge list badge-round badge-danger">New 5</span>
                  </div>


                  <div class="container">
                    <div class="content">

                      <a class="group item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <i class="icon wb wb-order bg-red-600 white circle"></i>
                          </div>
                          <div class="body">
                            <h6 class="heading">A new order has been placed</h6>
                            <time class="meta" datetime="2018-06-12T20:50:48+08:00">5 hours ago</time>
                          </div>
                        </div>
                      </a>

                      <a class="group item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <i class="icon wb wb-user bg-green-600 white circle" aria-hidden="true"></i>
                          </div>
                          <div class="body">
                            <h6 class="heading">Completed the task</h6>
                            <time class="meta" datetime="2018-06-11T18:29:20+08:00">2 days ago</time>
                          </div>
                        </div>
                      </a>

                      <a class="group item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <i class="icon wb wb-settings bg-red-600 white circle" aria-hidden="true"></i>
                          </div>
                          <div class="body">
                            <h6 class="heading">Settings updated</h6>
                            <time class="meta" datetime="2018-06-11T14:05:00+08:00">2 days ago</time>
                          </div>
                        </div>
                      </a>

                      <a class="group item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <i class="icon wb wb-calendar bg-blue-600 white circle" aria-hidden="true"></i>
                          </div>
                          <div class="body">
                            <h6 class="heading">Event started</h6>
                            <time class="meta" datetime="2018-06-10T13:50:18+08:00">3 days ago</time>
                          </div>
                        </div>
                      </a>

                      <a class="group item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <i class="icon wb wb-chat bg-orange-600 white circle" aria-hidden="true"></i>
                          </div>
                          <div class="body">
                            <h6 class="heading">Message received</h6>
                            <time class="meta" datetime="2018-06-10T12:34:48+08:00">3 days ago</time>
                          </div>
                        </div>
                      </a>

                    </div>

                  </div>


                  <div class="footer size">
                    <a class="item">All notifications</a>
                    <a class="item-button">
                      <i class="fa fa-cog"></i>
                    </a>
                  </div>
                </div>

              </li>

              <li class="item size icon dropdown">
                <a class="nav-link" href="#" data-toggle="dropdown">
                  <i class="fa fa-envelope"></i>
                  <span class="badge icon badge-pill badge-info up">5</span>
                </a>

                <div class="dropdown media right dropdown-menu">
                  <div class="header size">
                    <h5>MESSAGES</h5>
                    <span class="badge list badge-round badge-info">New 3</span>
                  </div>


                  <div class="container">
                    <div class="content">

                      <a class="group item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <span class="avatar md online">
                              <img src="https://raw.githubusercontent.com/binoykr/top-navbar/master/public/imgs/user-binoy.jpg" alt="..." />
                              <i></i>
                            </span>
                          </div>
                          <div class="body">
                            <h6 class="heading">Mary Adams</h6>
                            <time class="meta" datetime="2018-06-12T20:50:48+08:00">30 minutes ago</time>
                            <div class="detail">Anyways, i would like just do it</div>
                          </div>
                        </div>
                      </a>

                      <a class="group item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <span class="avatar md online">
                              <img src="https://raw.githubusercontent.com/binoykr/top-navbar/master/public/imgs/user-binoy.jpg" alt="..." />
                              <i></i>
                            </span>
                          </div>
                          <div class="body">
                            <h6 class="heading">Caleb Richards</h6>
                            <time class="meta" datetime="2018-06-11T18:29:20+08:00">12 hours ago</time>
                            <div class="detail">I checheck the document. But there seems</div>
                          </div>
                        </div>
                      </a>

                      <a class="group item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <span class="avatar md online">
                              <img src="https://raw.githubusercontent.com/binoykr/top-navbar/master/public/imgs/user-binoy.jpg" alt="..." />
                              <i></i>
                            </span>
                          </div>
                          <div class="body">
                            <h6 class="heading">June Lane</h6>
                            <time class="meta" datetime="2018-06-11T14:05:00+08:00">2 days ago</time>
                            <div class="detail">Lorem ipsum Id consectetur et minim</div>
                          </div>
                        </div>
                      </a>

                      <a class="group item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <span class="avatar md online">
                              <img src="https://raw.githubusercontent.com/binoykr/top-navbar/master/public/imgs/user-binoy.jpg" alt="..." />
                              <i></i>
                            </span>
                          </div>
                          <div class="body">
                            <h6 class="heading">Edward Fletcher</h6>
                            <time class="meta" datetime="2018-06-10T13:50:18+08:00">3 days ago</time>
                            <div class="detail">Dolor et irure cupidatat commodo nostrud nostrud.</div>
                          </div>
                        </div>
                      </a>
                    </div>

                  </div>


                  <div class="footer size">
                    <a class="item">See all messages</a>
                    <a class="item-button">
                      <i class="fa fa-cog"></i>
                    </a>
                  </div>
                </div>

              </li>

              <li class="item size avatar dropdown">
                <a class="nav-link" href="#" data-toggle="dropdown">
                  <span>
                    Hi Binoy
                  </span>
                  <span class="online">
                    <img src="https://raw.githubusercontent.com/binoykr/top-navbar/master/public/imgs/user-binoy.jpg"
                      alt="User picture" />
                    <i></i>
                  </span>
                </a>

                <div class="dropdown basic right dropdown-menu">

                  <a class="item" href="javascript:void(0)" role="menuitem">
                    <i class="icon wb wb-user" aria-hidden="true"></i>
                    Profile
                  </a>

                  <a class="item" href="javascript:void(0)" role="menuitem">
                    <i class="icon wb wb-payment" aria-hidden="true"></i>
                    Billing
                  </a>

                  <a class="item" href="javascript:void(0)" role="menuitem">
                    <i class="icon wb wb-settings" aria-hidden="true"></i>
                    Settings
                  </a>

                  <div class="dropdown-divider" role="presentation"></div>

                  <a class="item" href="javascript:void(0)" role="menuitem">
                    <i class="icon wb wb-power" aria-hidden="true"></i>
                    Logout
                  </a>
                </div>
              </li>

            </ul>
          </div>

        </nav>

      </div>
  );
}

export default App;
