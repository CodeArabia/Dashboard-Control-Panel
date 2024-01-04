import React, {Component} from 'react';
import DashboardTitleImage from '../img/Dashboard_title.png';



class NavHeader extends Component {
  render() {
    return(
      <div className="mb-3">
        <link rel="stylesheet" href="https://preview.tabler.io/dist/css/tabler.min.css" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="./css/demo.css" />
        <link rel="stylesheet" href="./css/tabler.css" />
        
                <header className="navbar navbar-expand-md navbar-light d-print-none">
                  <div className="container-xl">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                      <a href=".">
                        <img src={DashboardTitleImage} width="32" height="32" alt="Dashboard" className="navbar-brand-image me-3" />
                        
                      </a>
                    </h1>
                    <div className="navbar-nav flex-row order-md-last">
                      
                      <div className="d-none d-md-flex">
                        <a href="?theme=dark" className="nav-link px-0 hide-theme-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable dark mode" data-bs-original-title="Enable dark mode">
                          {/* Download SVG icon from http://tabler-icons.io/i/moon */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>
                        </a>
                        <a href="?theme=light" className="nav-link px-0 hide-theme-light" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable light mode" data-bs-original-title="Enable light mode">
                          {/* Download SVG icon from http://tabler-icons.io/i/sun */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg>
                        </a>
                        <div className="nav-item dropdown d-none d-md-flex me-3">
                          <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex="-1" aria-label="Show notifications">
                            {/* Download SVG icon from http://tabler-icons.io/i/bell */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg>
                            <span className="badge bg-red"></span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                            <div className="card">
                              <div className="card-header">
                                <h3 className="card-title">Last updates</h3>
                              </div>
                              <div className="list-group list-group-flush list-group-hoverable">
                                <div className="list-group-item">
                                  <div className="row align-items-center">
                                    <div className="col-auto"><span className="status-dot status-dot-animated bg-red d-block"></span></div>
                                    <div className="col text-truncate">
                                      <a href="#" className="text-body d-block">Example 1</a>
                                      <div className="d-block text-muted text-truncate mt-n1">
                                        Change deprecated html tags to text decoration classes (#29604)
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <a href="#" className="list-group-item-actions">
                                        {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item">
                                  <div className="row align-items-center">
                                    <div className="col-auto"><span className="status-dot d-block"></span></div>
                                    <div className="col text-truncate">
                                      <a href="#" className="text-body d-block">Example 2</a>
                                      <div className="d-block text-muted text-truncate mt-n1">
                                        justify-content:between ⇒ justify-content:space-between (#29734)
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <a href="#" className="list-group-item-actions show">
                                        {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon text-yellow" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item">
                                  <div className="row align-items-center">
                                    <div className="col-auto"><span className="status-dot d-block"></span></div>
                                    <div className="col text-truncate">
                                      <a href="#" className="text-body d-block">Example 3</a>
                                      <div className="d-block text-muted text-truncate mt-n1">
                                        Update change-version.js (#29736)
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <a href="#" className="list-group-item-actions">
                                        {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item">
                                  <div className="row align-items-center">
                                    <div className="col-auto"><span className="status-dot status-dot-animated bg-green d-block"></span></div>
                                    <div className="col text-truncate">
                                      <a href="#" className="text-body d-block">Example 4</a>
                                      <div className="d-block text-muted text-truncate mt-n1">
                                        Regenerate package-lock.json (#29730)
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <a href="#" className="list-group-item-actions">
                                        {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon text-muted" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nav-item dropdown">
                        <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                          <span className="avatar avatar-sm" style={{backgroundImage: `url(${require('../img/admin.jpg')})` }}></span>
                          <div className="d-none d-xl-block ps-2">
                            <div>Mohammad Abd</div>
                            <div className="mt-1 small text-muted">Admin</div>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <a href="#" className="dropdown-item">Status</a>
                          <a href="./profile.html" className="dropdown-item">Profile</a>
                          <a href="#" className="dropdown-item">Feedback</a>
                          <div className="dropdown-divider"></div>
                          <a href="./settings.html" className="dropdown-item">Settings</a>
                          <a href="./sign-in.html" className="dropdown-item">Logout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <header className="navbar-expand-md">
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="navbar">
            <div className="container-xl">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="./">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/home */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>
                    </span>
                    <span className="nav-link-title">
                      Home
                    </span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/package */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                    </span>
                    <span className="nav-link-title">
                      Interface
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./accordion.html">
                          Accordion
                        </a>
                        <a className="dropdown-item" href="./blank.html">
                          Blank page
                        </a>
                        <a className="dropdown-item" href="./badges.html">
                          Badges
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./buttons.html">
                          Buttons
                        </a>
                        <div className="dropend">
                          <a className="dropdown-item dropdown-toggle" href="#sidebar-cards" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                            Cards
                            <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                          </a>
                          <div className="dropdown-menu">
                            <a href="./cards.html" className="dropdown-item">
                              Sample cards
                            </a>
                            <a href="./card-actions.html" className="dropdown-item">
                              Card actions
                              <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                            </a>
                            <a href="./cards-masonry.html" className="dropdown-item">
                              Cards Masonry
                            </a>
                          </div>
                        </div>
                        <a className="dropdown-item" href="./colors.html">
                          Colors
                        </a>
                        <a className="dropdown-item" href="./datagrid.html">
                          Data grid
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./datatables.html">
                          Datatables
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./dropdowns.html">
                          Dropdowns
                        </a>
                        <a className="dropdown-item" href="./modals.html">
                          Modals
                        </a>
                        <a className="dropdown-item" href="./maps.html">
                          Maps
                        </a>
                        <a className="dropdown-item" href="./map-fullsize.html">
                          Map fullsize
                        </a>
                        <a className="dropdown-item" href="./maps-vector.html">
                          Vector maps
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./navigation.html">
                          Navigation
                        </a>
                        <a className="dropdown-item" href="./charts.html">
                          Charts
                        </a>
                        <a className="dropdown-item" href="./pagination.html">
                          {/* Download SVG icon from http://tabler-icons.io/i/pie-chart */}
                          Pagination
                        </a>
                      </div>
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./placeholder.html">
                          Placeholder
                        </a>
                        <a className="dropdown-item" href="./steps.html">
                          Steps
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./stars-rating.html">
                          Stars rating
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./tabs.html">
                          Tabs
                        </a>
                        <a className="dropdown-item" href="./tables.html">
                          Tables
                        </a>
                        <a className="dropdown-item" href="./carousel.html">
                          Carousel
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./lists.html">
                          Lists
                        </a>
                        <a className="dropdown-item" href="./typography.html">
                          Typography
                        </a>
                        <a className="dropdown-item" href="./offcanvas.html">
                          Offcanvas
                        </a>
                        <a className="dropdown-item" href="./markdown.html">
                          Markdown
                        </a>
                        <a className="dropdown-item" href="./dropzone.html">
                          Dropzone
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./lightbox.html">
                          Lightbox
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./tinymce.html">
                          TinyMCE
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./inline-player.html">
                          Inline player
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <div className="dropend">
                          <a className="dropdown-item dropdown-toggle" href="#sidebar-authentication" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                            Authentication
                          </a>
                          <div className="dropdown-menu">
                            <a href="./sign-in.html" className="dropdown-item">
                              Sign in
                            </a>
                            <a href="./sign-in-link.html" className="dropdown-item">
                              Sign in link
                            </a>
                            <a href="./sign-in-illustration.html" className="dropdown-item">
                              Sign in with illustration
                            </a>
                            <a href="./sign-in-cover.html" className="dropdown-item">
                              Sign in with cover
                            </a>
                            <a href="./sign-up.html" className="dropdown-item">
                              Sign up
                            </a>
                            <a href="./forgot-password.html" className="dropdown-item">
                              Forgot password
                            </a>
                            <a href="./terms-of-service.html" className="dropdown-item">
                              Terms of service
                            </a>
                            <a href="./auth-lock.html" className="dropdown-item">
                              Lock screen
                            </a>
                          </div>
                        </div>
                        <div className="dropend">
                          <a className="dropdown-item dropdown-toggle" href="#sidebar-error" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                            {/* Download SVG icon from http://tabler-icons.io/i/file-minus */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-inline me-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M9 14l6 0"></path></svg>
                            Error pages
                          </a>
                          <div className="dropdown-menu">
                            <a href="./error-404.html" className="dropdown-item">
                              404 page
                            </a>
                            <a href="./error-500.html" className="dropdown-item">
                              500 page
                            </a>
                            <a href="./error-maintenance.html" className="dropdown-item">
                              Maintenance page
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./form-elements.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/checkbox */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 11l3 3l8 -8"></path><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path></svg>
                    </span>
                    <span className="nav-link-title">
                      Form elements
                    </span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#navbar-extra" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/star */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                    </span>
                    <span className="nav-link-title">
                      Extra
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./empty.html">
                          Empty page
                        </a>
                        <a className="dropdown-item" href="./cookie-banner.html">
                          Cookie banner
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./activity.html">
                          Activity
                        </a>
                        <a className="dropdown-item" href="./gallery.html">
                          Gallery
                        </a>
                        <a className="dropdown-item" href="./invoice.html">
                          Invoice
                        </a>
                        <a className="dropdown-item" href="./search-results.html">
                          Search results
                        </a>
                        <a className="dropdown-item" href="./pricing.html">
                          Pricing cards
                        </a>
                        <a className="dropdown-item" href="./pricing-table.html">
                          Pricing table
                        </a>
                        <a className="dropdown-item" href="./faq.html">
                          FAQ
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./users.html">
                          Users
                        </a>
                        <a className="dropdown-item" href="./license.html">
                          License
                        </a>
                      </div>
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./logs.html">
                          Logs
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./music.html">
                          Music
                        </a>
                        <a className="dropdown-item" href="./photogrid.html">
                          Photogrid
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./tasks.html">
                          Tasks
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./uptime.html">
                          Uptime monitor
                        </a>
                        <a className="dropdown-item" href="./widgets.html">
                          Widgets
                        </a>
                        <a className="dropdown-item" href="./wizard.html">
                          Wizard
                        </a>
                        <a className="dropdown-item" href="./settings.html">
                          Settings
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./trial-ended.html">
                          Trial ended
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./job-listing.html">
                          Job listing
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./page-loader.html">
                          Page loader
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#navbar-layout" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/layout-2 */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path></svg>
                    </span>
                    <span className="nav-link-title">
                      Layout
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./layout-horizontal.html">
                          Horizontal
                        </a>
                        <a className="dropdown-item" href="./layout-boxed.html">
                          Boxed
                          <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                        </a>
                        <a className="dropdown-item" href="./layout-vertical.html">
                          Vertical
                        </a>
                        <a className="dropdown-item" href="./layout-vertical-transparent.html">
                          Vertical transparent
                        </a>
                        <a className="dropdown-item" href="./layout-vertical-right.html">
                          Right vertical
                        </a>
                        <a className="dropdown-item" href="./layout-condensed.html">
                          Condensed
                        </a>
                        <a className="dropdown-item" href="./layout-combo.html">
                          Combined
                        </a>
                      </div>
                      <div className="dropdown-menu-column">
                        <a className="dropdown-item" href="./layout-navbar-dark.html">
                          Navbar dark
                        </a>
                        <a className="dropdown-item" href="./layout-navbar-sticky.html">
                          Navbar sticky
                        </a>
                        <a className="dropdown-item" href="./layout-navbar-overlap.html">
                          Navbar overlap
                        </a>
                        <a className="dropdown-item" href="./layout-rtl.html">
                          RTL mode
                        </a>
                        <a className="dropdown-item" href="./layout-fluid.html">
                          Fluid
                        </a>
                        <a className="dropdown-item" href="./layout-fluid-vertical.html">
                          Fluid vertical
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./icons.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/ghost */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7"></path><path d="M10 10l.01 0"></path><path d="M14 10l.01 0"></path><path d="M10 14a3.5 3.5 0 0 0 4 0"></path></svg>
                    </span>
                    <span className="nav-link-title">
                      4158 icons
                    </span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#navbar-help" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/lifebuoy */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M15 15l3.35 3.35"></path><path d="M9 15l-3.35 3.35"></path><path d="M5.65 5.65l3.35 3.35"></path><path d="M18.35 5.65l-3.35 3.35"></path></svg>
                    </span>
                    <span className="nav-link-title">
                      Help
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="https://tabler.io/docs" target="_blank" rel="noopener">
                      Documentation
                    </a>
                    <a className="dropdown-item" href="./changelog.html">
                      Changelog
                    </a>
                    <a className="dropdown-item" href="https://github.com/tabler/tabler" target="_blank" rel="noopener">
                      Source code
                    </a>
                    <a className="dropdown-item text-pink" href="https://github.com/sponsors/codecalm" target="_blank" rel="noopener">
                      {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-inline me-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>
                      Sponsor project!
                    </a>
                  </div>
                </li>
              </ul>
              <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                <form action="./" method="get" autoComplete="off" noValidate="">
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      {/* Download SVG icon from http://tabler-icons.io/i/search */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
                    </span>
                    <input type="text" value="" className="form-control" placeholder="Search…" aria-label="Search in website"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

                
              </div>
    )
  }
}



export default NavHeader;

