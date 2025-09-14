# Interaction Flow for ALPHA

Purpose of Documentation: To outline the end-to-end flow of user interactions within the app.

> Legend
>
> [!designed]: Screen/component not designed or planned
>
> [!implemented]: Screen/component not implemented
>
> [!personalized]: Screen/component not customized for the app theme
>
> [!backend]: Screen/component lacks intended backend support

## Intendend Audience:
* Product Owners
* UX/UI Designers
* Developers
* QA Testers,
* Stakeholders

## 1. User Personas
1. New User - First time visitors who hasn't signed up.
2. Registered User - Already has and account and is logged in.


## 2. Entry Points
1. App Launch Screen
2. Deep Links (notifications, shared URLs) [!designed]
3. External Sources (ad, referral links) [!designed]

## 3. High-Level User Flow (Overview)
Represents the journey of a typical user in steps:

1. [App Launch](#1-app-launch)
2. [Onboarding Screens](#32-onboarding)
3. Authentication ( Login / Register)
4. Home Screen
5. Navigation & Exploration
   1. Home Screen
   2. Maps (Roadmaps)
   3. Journey (Course chosen by user)
   4. Profile (User info and settings)

### 3.1. App Launch

* Display App Branding [!implemented]
* If logged in -> Go to Home
* If new user -> Go to Onboarding


### 3.2. Onboarding
* Swipeable tutorial screens [!personalized]
* Permission prompts (loacation, camera, notifications) [!designed]

## 3.3. Authentication
* Sign Up: via email, phone, or social login
* Login: credentials, biometrics, 2FA
* Error handling (invalid credentials, network failure) [!implemented]


## 3.4. Home Screen

### 3.4.1. Dashboard
* Main Navigation tabs
* Personalized content feed [!backend]
* Search Bar [!backend]

### 3.4.2. Maps
* Cards depicting various roadmaps in tech field. e.g. Mobile app, DevOps,
* Each Map contains various Journeys that you can choose as your journey. [!designed]

### 3.4.3. Journey
* The chosen journey will be expaneded in journey screen [!designed]
* This will show your path to completing a course/journey. [!designed]

### 3.4.4. Profile
* User information
* manage account, payments, preferences [!designed]
* User Information Editing[!designed]
* App Settings [!designed]
* Meta Data [!designed]
* Permission [!designed]
* App version, help, and feedback [!designed]


## 4. Core Flow
1. Home -> Continue your Journey -> Journey Screen -> Trail -> Continue Video
2. Home -> Maps -> Select Map -> Select Journey -> Journey Screen -> Start Journey

## 5. Notifications
1. Push Notifications -> Open related screens
2. In-app banners / pop-ups for progress, XP, rewards

## 6. Exit Scenarios
1. Logout
2. App closed
3. App moved to background
4. Reentry behavior (resume last session or go to dashboard)


## 7. Error & Edge Case Handling
* No internet → Show offline mode message
* Session expired → Redirect to login
* Invalid data → Display error messages
