function ProfilePage() {
    return (
      <div className="page-container bg-white">
        <div className="content-container">
          <div className="p-4 text-center border-b">
            <h1 className="text-lg font-medium text-gray-800">Account Settings</h1>
          </div>
  
          <div className="p-6 bg-gray-50">
            <div className="flex items-start">
              <div className="relative">
                <img src="image.png" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </div>
              </div>
  
              <div className="ml-4 text-left">
                <h2 className="font-medium">Marry Doe</h2>
                <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
              </div>
            </div>
  
            <div className="mt-6 text-sm text-gray-700">
              <p>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore
                Et Dolore Magna Aliquyam Erat, Sed Diam
              </p>
            </div>
          </div>
  
          <div className="border-t border-dashed"></div>
  
          <div className="flex-grow"></div>
        </div>
      </div>
    )
  }
  
  export default ProfilePage
  