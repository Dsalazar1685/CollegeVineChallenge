<App />
  <Main userType view/>
    //userType retrieved from DB on login based on user's level of admin privileges: admin, consultant, student;
      //used to determine which views a user has access to.
    //view is a string used to determine which view to render beneath the nav bar; defaults to 'home', changes when a nav button is selected
    <NavBar userType location view updateView/>
      //location is a string - 'timeline', 'dashboard', 'workspace' used to determine nav bar color
      //here, view determines which button receives darker shading indicating it is currently selected.
      //updateView is a function passed down from Main, to be passed down as a click handler for the Icon components.
        //when an icon is clicked, updateView updates 'view' in the Main component to the corresponding view.
      <HomeIcon updateView/>
        //updateView is a function passed down
      {
        (userType === 'admin')
      ? <SearchIcon updateView/>
      : null
      }
      <InboxIcon newMessages updateView/>
        //newMessages should be a boolean indicating if a user has new messages in their inbox;
        //determines whether the red 'new message' icon appears
      <NotificationsIcon newNotifications updateView/>
        //newNotifications should be a boolean indicating if a user has new notifications;
        //determines whether the red 'new notification' icon appears
      <ProfileIcon profileImage updateView/>
        <ProfileDropdown selected/>
          //selected is a boolean determining whether the dropdown is visible; changes when the Profile icon is clicked
        //profileImage should be a string of the link to a user's profile image
    <Body view/>
      //if userType === 'admin' and view === 'home' render:
      <Timeline/>
        <TimelineDropdown selected/>
        //selected is a boolean determining whether the dropdown is visible; changes when the Timeline bar is clicked

      //if userType === 'consultant' and location === 'dashboard' and view === 'home' render:
      <People/>
        <PeopleDropdown selected/>
        //selected is a boolean determining whether the dropdown is visible; changes when the People bar is clicked

      //if userType === 'consultant' and location === 'workspace' and view === 'home'
        //or userType === 'student' and view === 'home' render:
      <JuniorApps/>
        <JuniorAppsDropdown selected/>
        //selected is a boolean determining whether the dropdown is visible; changes when the JuniorApps bar is clicked

      //if view === 'search' render:
      <Search/>
      //if view === 'inbox' render:
      <Inbox/>
      //if view === 'notifications' render:
      <Notifications/>
