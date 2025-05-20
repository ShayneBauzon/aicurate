
# AIcurate - Website Demo Guide

## 1. Introduction

Welcome to the AIcurate demo! AIcurate is an AI-powered browser extension concept designed to help users curate information by detecting outdated, biased, or false content in real-time as they browse the web. This website serves as a promotional landing page and a demonstration of the extension's core functionalities.

**Presenter's Goal**: Showcase the user experience, key features, and the problem AIcurate aims to solve. Emphasize that the login, registration, and extension installation are simulated for demo purposes.

## 2. Core Features to Highlight

*   **Real-Time AI Detection**: AIcurate identifies potentially problematic information instantly.
*   **In-Page AI Explanation**: Users get clear, contextual explanations for flagged content without leaving their current page. This includes corrected information and source links.
*   **User Feedback System**: Users can rate explanations, contributing to the AI's ongoing improvement.
*   **Modern & Clean UI**: The website and simulated extension components feature a professional and user-friendly design.

## 3. Demo Flow & Script

### Step 1: Initial Landing & Registration

*   **Action**: Open the website.
*   **Expected**: The user is automatically redirected to the **Login Page** (`/login`).
    *   "Notice how first-time visitors are directed to log in or register."
*   **Action**: Click the "Sign up here" link or the "Register" button.
*   **Expected**: The user is taken to the **Register Page** (`/register`).
    *   "Let's quickly create an account. The registration page is straightforward, asking for essential details."
*   **Action**:
    1.  Attempt to submit with empty fields to show basic validation.
        *   "You'll see basic client-side validation, like ensuring fields aren't empty."
    2.  Enter a full name (e.g., "Demo User").
    3.  Enter an invalid email format (e.g., "test@test") and then a valid one (e.g., "demo@aicurate.com").
        *   "It also checks for a valid email format."
    4.  Enter a password (e.g., "password123").
    5.  Enter a non-matching confirm password, then a matching one.
        *   "And ensures passwords match."
    6.  Click "Register".
*   **Expected**:
    *   A loading indicator appears on the "Register" button.
    *   A success toast notification ("Registration Successful!") appears.
    *   The user is redirected back to the **Login Page**.
    *   "After successful registration, we're taken back to the login page."

### Step 2: Login Process

*   **Action**: On the **Login Page**:
    1.  Attempt to submit with an invalid email or empty password to show validation.
    2.  Enter the registered email (e.g., "demo@aicurate.com").
    3.  Enter any password (e.g., "password123" - no actual validation against the registered one occurs in this demo).
    4.  Click "Login".
*   **Expected**:
    *   The login card displays a smooth fade-out and slide-up animation.
    *   A loading indicator appears on the "Login" button ("Logging in...").
    *   A success toast notification ("Login Successful!") appears.
    *   The user is redirected to the **Main Application Page** (`/main`).
    *   "Upon login, there's a smooth transition, and we land on the AIcurate main page."

### Step 3: Exploring the Main Page (`/main`)

*   **Action**: Briefly scroll through the main page.
*   **Expected**:
    *   **Navbar**: Point out the navigation links ("Features", "Demo", "Testimonials"), the "Download Now" button, and the "Logout" button.
        *   "The main page features a clean navbar for easy navigation and access to key sections like downloading the extension or logging out."
    *   **Hero Section**: Briefly mention the value proposition.
        *   "The hero section clearly communicates AIcurate's mission: to help users browse with confidence by identifying problematic content."
    *   **Features Section**: Highlight the three core features verbally (Real-Time AI Detection, In-Page AI Explanation, User Feedback System).
        *   "AIcurate offers powerful features: real-time detection of misinformation, clear in-page explanations with sources, and a user feedback system to continuously improve its accuracy."
    *   **Demo Section ("See AIcurate in Action")**: Transition to this for the interactive part.
        *   "Now, let's see a practical demonstration of how AIcurate works."
    *   **Social Proof Section**: Briefly mention.
        *   "We also showcase testimonials from satisfied users."
    *   **CTA Section**: Point out the call to action.
        *   "And a clear call to action to download the extension."
    *   **Footer**: Standard footer links.

### Step 4: Interactive Demo - AIcurate in Action

*   **Action**: Scroll to the "See AIcurate in Action" section.
*   **Expected**: An article snippet about "Duranta Erecta" with an image and highlighted phrases.
    *   "This section simulates browsing an article where AIcurate has identified potentially misleading information."
*   **Action**: Click on the first highlighted phrase: `"Antartica, Russia, and Europe."`
*   **Expected**: A popover appears.
    *   **Content**:
        *   Title: "AICURATE"
        *   Explanation: "This description is false, as Duranta erecta is native to the tropical regions of the Americas..."
        *   Source Link: "Wikipedia - Duranta erecta" (mention it's clickable).
        *   Feedback buttons: Thumbs Up/Down.
    *   "When a user clicks on a highlighted phrase, AIcurate provides an instant, in-page explanation. Here, it corrects the geographical origin of the plant and even provides a source link for verification. Users can also provide feedback on the explanation's helpfulness."
*   **Action**: Click outside the popover or the Thumbs Up/Down button to close it.
*   **Action**: Click on the second highlighted phrase: `"their ability to feed on decaying material..."`
*   **Expected**: Another popover appears.
    *   **Content**:
        *   Title: "AICURATE"
        *   Explanation: "This description aligns more with the species Eulichas funebris. The importance of Duranta erecta lies in its potential use in the medical field..."
        *   Source Link: "Durantaerecta.com"
        *   Feedback buttons: Thumbs Up/Down.
    *   "Here's another example. AIcurate clarifies a misattributed characteristic and provides correct information along with its source. This non-intrusive, contextual help is key to AIcurate's value."
*   **Action**: Close the popover.

### Step 5: Extension Download Page Simulation

*   **Action**: Click the "Download AIcurate Now" button in the CTA section (or the "Download Now" button in the Navbar).
*   **Expected**: The user is redirected to the **Download Page** (`/download`).
    *   "If a user is convinced, they can proceed to download the extension. Clicking the download button takes them to a page designed to mimic the Chrome Web Store."
*   **Action**: On the Download Page, point out:
    *   Extension Name ("AIcurate"), Offered by, Ratings, User count.
    *   Screenshots (placeholders).
    *   Overview, Features list, User Reviews.
    *   Additional Information (Version, Updated, Size).
    *   The main "Add to Chrome" button.
    *   "This page provides all the information a user would expect before installing an extension."
*   **Action**: Click the "Add to Chrome" button.
*   **Expected**: A dialog sequence begins:
    1.  **Confirmation Dialog**:
        *   Title: "Add 'AIcurate'?"
        *   Mock Permissions: "Read and change data on websites you visit", "Display notifications".
        *   Buttons: "Cancel", "Add extension".
        *   "Clicking 'Add to Chrome' initiates a simulated installation process, starting with a confirmation dialog typical of browser extensions."
    2.  **Action**: Click "Add extension".
    3.  **Installing Dialog**:
        *   Title: "Installing AIcurate..."
        *   Loading spinner and message.
        *   "The system then shows an 'installing' state..."
    4.  **Installed Dialog** (after a short delay):
        *   Title: "AIcurate has been added to Chrome" (with a checkmark icon).
        *   Brief message.
        *   Button: "Okay".
        *   "...followed by a success message."
    5.  **Action**: Click "Okay".
    6.  **Main Page Button Update**: The "Add to Chrome" button on the download page itself changes to "Added to Chrome" (with a checkmark) and becomes disabled.
        *   "The download page reflects that the extension is now 'installed'."

### Step 6: Logout

*   **Action**: Navigate back to the main application page (e.g., by clicking "AIcurate Home" in the download page header, or "AIcurate" logo in the main navbar if already there).
*   **Action**: Click the "Logout" button in the Navbar.
*   **Expected**:
    *   A toast notification ("Logged Out") appears.
    *   The user is redirected back to the **Login Page**.
    *   "Finally, logging out is simple and returns the user to the login screen."

## 4. Technical Stack (Optional - if relevant to audience)

*   Next.js (App Router)
*   React
*   TypeScript
*   Tailwind CSS
*   ShadCN UI (for pre-built components)
*   Lucide React (for icons)
*   (Mention Genkit if AI capabilities were actually implemented beyond simulation)

## 5. Q&A

Be prepared to answer questions about the project, its features, and future plans.

---

This guide should provide a solid structure for the AIcurate demo!
