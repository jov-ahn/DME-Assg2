# DME Assignment 2 Hintel App

## Import Instructions

Before proceeding, please make sure you have downloaded [XAMPP Control Panel](https://www.apachefriends.org/index.html) on any laptop/desktop device.
1. Open up XAMPP Control Panel and press "Start" on Apache and MySQL
2. Create a new database by clicking "New" on the left side of the panel
3. Next, click on "Import" located in the top menu bar
4. Click on "Choose file" and import the "hintel.sql"
5. Lastly, click on "Go" on the bottom right corner of the page and you are all set!

## How to use application
   - First, install the app and tap to open up the app
   - Next, Login with the correct details provided
   - After logging in, there are multiple routes you can take
      1. Stay on dashboard / home page to view expenses statistics and room statuses
      2. Tap on Staff in the navigation bar to access the list of staff and their details
      3. Tap on inventory to view the inventory count
         a. Tap on toiletries button to view toiletries related items
         b. Tap on FNB button to view food and beverages related items
      4. Tap on settings to view the credits and to log out of the app

## Limitations
   - Only works on Android OS Oreo ( 8.1 & above )
   - Minimum Phone Hardware Specs
     - 1GB of Space
     - 4GB of RAM
   - Only works when connected to the internet ( to allow data from database to sync across )
   - Requires a phone with minimum dimension of 344 pixels by 842 pixels

## Features
- Allows reading of expenses statistics, including profits & losses
- Allows reading of hotel room statuses, such as occupied, empty or cleaning
- Allows reading of staff list, including their name, role and work hours
- Allows reading of inventory item count, categorised into Toiletries & Food & Beverages ( FNB )
   - Progress bar matches up with item count based on percentage calculated of current items from original count
- Be alerted whenever a certain item is running low in inventory count
- Securely Log In & Out with a customised username & password
- Be able to Create, Update & Delete all data such as inventory item count & staff list that synchronises with database / api
 
### Existing Features
- Allows reading of expenses statistics, including profits & losses
- Allows reading of hotel room statuses, such as occupied, empty or cleaning
- Allows reading of staff list, including their name, role and work hours
- Allows reading of inventory item count, categorised into Toiletries & Food & Beverages ( FNB )
- Be alerted whenever a certain item is running low in inventory count
- Securely Log In & Out with a customised username & password

### Features Left to Implement
- Be able to Create, Update & Delete all data such as inventory item count & staff list that updates on database / api
- Progress bar matches up with item count based on percentage calculated of current items from original count

## Technologies Used
- [HTML](https://html.com/)
    - The project uses **HTML** to create the app's structure.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - The project uses **CSS** to design, describe & present our unique and attractive app design.
- [JavaScript](https://www.javascript.com/)
    - The project uses **JavaScript** to define behaviours of buttons, linking data from databases & API.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Ionic 5](https://ionicframework.com/)
    - The project uses **Ionic** to create & customise pre-defined assests designed for mobile phones that allow for better quality of life.
- [Chart.JS](https://www.chartjs.org/)
    - The project uses **ChartJS** to create & customise charts such as doughnut and bar chart.
- [Android Studio](https://developer.android.com/studio)
    - The project uses **Android Studio** to export and build our app into a usable app on Android Devices.

## Testing

1. Log In / Out Form:
    1. Open the Hintel App
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid username and verify that a relevant error message appears
    4. Try to submit the form with an invalid password and verify that a relevant error message appears
    5. Try to submit the form with all inputs valid and verify that a success message appears.

## Screen Size

This app was designed using [Google Pixel 4 / 4XL] as a reference point(https://store.google.com/gb/category/phones?srp=/gb/product/pixel_4_specs)
   - Build with Android Components ( Ionic )
   - Build for Android Devices ( APK )
   - **Portrait** 
   - 412 pixels by 870 pixels
   - Responsive sizing

## Bugs
   - None known as of now

## Design Process

The purpose of this app was meant for higher management / owners of Boutique Hotels. It is meant to allow access to up-to-date information that is linked & constantly sycnhronised from an external [Database](https://github.com/jov-ahn/DDWA-Assg2.git). This would allow them access to the hotel's information such as expenses, room statuses, staff details, inventory item count , etc. Overall allowing for more improved processes, lesser negative customer experiences and lower risk of data loss on excel sheets.

As our theme was to design for a botique hotel on an app meant for higher management / owners of Botique Hotels, we had to decide on several factors first before diving deeper into the design process
- **Colour**
  - [Blue colour scheme](https://pin.it/4FIJtXo)
     - We based specific colour types based on colour psychology. As a hotel app is leaning towards the business industry where they are expected to act professional, serious but at the same time welcoming for customers. Blue can be defined as confidence, trustworthiness, success & professionalism. These definitions clearly align with what we envision and it's purpose for the app.
- Font Type
  - Sans Serif [Poppins](https://fonts.google.com/specimen/Poppins?query=poppins&preview.text_type=custom#license)
    - Sans serif style font Poppins was chosen due to several reasons. One was due to how effortless it is to interpret it on digital screens, especially on smaller scale screen such as smart phones. Another reason was due to a more cleaner, unique & trendy style font face. As the app needed to feel exciting, motivating & professional from aesthetic wise, using commonly used font faces such as Arial not only limits the font weights that can be used, but also limits the aesthetics of the app due to it being over used as a web-safe font. We ensured that the font Poppins was web-safe by fact-checking the font and at the same time, using it from a legible source which was [Google Fonts](https://fonts.google.com/specimen/Poppins?query=poppins&preview.text_type=custom&preview.text=the%20fried%20food#license)
- Cards
  - Using cards allows content to be seperated into their respective categories. Not only allowing for versatility in editing for different types of content, but also to help   segregate information to easily find the information they need.

### User Stories
  - As a higher up of a Boutique Hotel, I want to have an app that is exciting, motivating and professional to look at to feel better and more motivated to use the app in my work
  - As a higher up of a Boutique Hotel, I want to have data seperated into containers and / or cards for easier viewing of large amounts of information so that it is much faster, easier and more aesthetic to view at large amounts of information on an app than looking at data in large paragraphs on a single screen

## Credits
- Bing Heng
- Jovan
- Joo Siang
- Jia Jun
- Sean
- Zen

### Acknowledgements
- I received inspiration for this project from Pinterest under [DME Hotel App](https://pin.it/6wsIEbe) Board
- I picked out the colour scheme for this project from [Pinterest](https://www.pinterest.com/pin/699395017130678878/)
