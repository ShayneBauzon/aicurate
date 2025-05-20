

# Project Title: AIcurate - Website Demo

## 1. Project Description

AIcurate is a concept for an AI-powered browser extension designed to help users critically evaluate web content. It aims to identify potentially outdated, biased, or false information in real-time as users browse. This project is the promotional landing page and interactive demonstration website for the AIcurate extension concept. It showcases the user experience, key features, and the problem AIcurate intends to solve.

The website simulates:
*   User registration and login.
*   A main landing page detailing AIcurate's features.
*   An interactive demo of how AIcurate would flag and explain problematic content on a webpage.
*   A simulated extension download page mimicking a browser's web store.

## 2. Table of Contents

*   [Project Description](#1-project-description)
*   [Table of Contents](#2-table-of-contents)
*   [Installation / Setup Instructions](#3-installation--setup-instructions)
*   [Usage Instructions](#4-usage-instructions)
*   [Features](#5-features)
*   [Demo / Presentation Guide](#6-demo--presentation-guide)
*   [Technologies Used](#7-technologies-used)
*   [Project Structure](#8-project-structure)
*   [Contributing](#9-contributing)
*   [Known Issues / Limitations](#10-known-issues--limitations)
*   [Future Improvements](#11-future-improvements)

## 3. Installation / Setup Instructions

To set up and run the AIcurate website demo locally, follow these steps:

**Prerequisites:**
*   Node.js (v18 or later recommended)
*   npm or yarn

**Steps:**

1.  **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd aicurate # Or your project's root directory name
    ```

2.  **Install Dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

3.  **Environment Variables:**
    *   This project uses a `.env` file for environment variables. Currently, it's set up for Genkit with Google AI. If you intend to use the AI features, ensure you have a `GOOGLE_API_KEY` or similar, and configure it in `.env` if needed. For the basic website demo, this might not be strictly necessary if AI calls are mocked or not central to the demo flow.
    *   Create a `.env` file in the root of the project if it doesn't exist.
        ```
        # Example:
        # GOOGLE_API_KEY=your_google_api_key_here
        ```

4.  **Run the Development Server:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```
    This will typically start the development server on `http://localhost:9002`.

5.  **Run Genkit (Optional - for AI features):**
    If you want to run the Genkit AI flows locally (e.g., for the "Real-time Alerts" section if it were to make live AI calls):
    ```bash
    npm run genkit:dev
    ```
    Or for watching changes:
    ```bash
    npm run genkit:watch
    ```

## 4. Usage Instructions

Once the development server is running:

1.  **Access the Website:** Open your web browser and navigate to `http://localhost:9002` (or the port specified in your console).
2.  **Initial Redirect:** You will be automatically redirected to the Login Page (`/login`).
3.  **Registration & Login:**
    *   Use the "Sign up here" link to navigate to the Register Page (`/register`).
    *   Fill in the registration form (Full Name, Email, Password, Confirm Password) and click "Register." Basic client-side validation is in place.
    *   You will be redirected back to the Login Page.
    *   Enter your registered email and any password (authentication is simulated) and click "Login."
4.  **Main Application:** After "login," you'll be taken to the Main Application Page (`/main`), where you can explore the different sections:
    *   **Hero Section:** Introduction to AIcurate.
    *   **Features Section:** Details on core functionalities.
    *   **Demo Section ("See AIcurate in Action"):** Interact with highlighted text to see simulated AI explanations.
    *   **Social Proof Section:** User testimonials.
    *   **CTA Section:** Links to the simulated download page.
5.  **Simulated Extension Download:** Click on "Download AIcurate Now" to go to the `/download` page, which mimics a Chrome Web Store page. Interact with the "Add to Chrome" button to see a simulated installation flow.
6.  **Logout:** Use the "Logout" button in the navigation bar to return to the Login Page.

## 5. Features

*   **Simulated User Authentication:**
    *   Registration page with basic validation.
    *   Login page with basic validation and a smooth transition animation.
    *   Automatic redirect to login for first-time visitors.
*   **Promotional Landing Page (`/main`):**
    *   **Hero Section:** Captivating introduction to AIcurate.
    *   **Features Showcase:** Visually engaging presentation of AIcurate's key functionalities (Real-Time AI Detection, In-Page AI Explanation, User Feedback System).
    *   **Interactive Demo Section:** Simulates AIcurate flagging content on a sample article. Clicking highlighted text reveals popovers with explanations, source links, and feedback buttons.
    *   **Social Proof/Testimonials:** Mock user testimonials.
    *   **Call to Action (CTA):** Prominent "Download Now" buttons.
    *   **Responsive Navbar & Footer:** Consistent navigation across the site.
*   **Simulated Extension Download Page (`/download`):**
    *   Visually mimics a Chrome Web Store page for the AIcurate extension.
    *   Includes extension details, placeholder screenshots, features, and user reviews.
    *   Interactive "Add to Chrome" button simulates the installation process with dialog popups (confirmation, installing, installed).
*   **Modern & Clean UI:**
    *   Styled with Tailwind CSS and ShadCN UI components.
    *   Uses a salmon-pink inspired color palette.
    *   Includes icons from Lucide React.

## 6. Demo / Presentation Guide

**Presenter's Goal**: Showcase the user experience, key features, and the problem AIcurate aims to solve. Emphasize that the login, registration, and extension installation are simulated for demo purposes.

### Step 1: Initial Landing & Registration

*   **Action**: Open the website (e.g., `http://localhost:9002`).
*   **Expected**: The user is automatically redirected to the **Login Page** (`/login`).
    *   *"Notice how first-time visitors are directed to log in or register."*
*   **Action**: Click the "Sign up here" link or the "Register" button.
*   **Expected**: The user is taken to the **Register Page** (`/register`).
    *   *"Let's quickly create an account. The registration page is straightforward, asking for essential details."*
*   **Action**:
    1.  Attempt to submit with empty fields to show basic validation.
        *   *"You'll see basic client-side validation, like ensuring fields aren't empty."*
    2.  Enter a full name (e.g., "Demo User").
    3.  Enter an invalid email format (e.g., "test@test") and then a valid one (e.g., "demo@aicurate.com").
        *   *"It also checks for a valid email format."*
    4.  Enter a password (e.g., "password123").
    5.  Enter a non-matching confirm password, then a matching one.
        *   *"And ensures passwords match."*
    6.  Click "Register".
*   **Expected**:
    *   A loading indicator appears on the "Register" button.
    *   A success toast notification ("Registration Successful!") appears.
    *   The user is redirected back to the **Login Page**.
    *   *"After successful registration, we're taken back to the login page."*

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
    *   *"Upon login, there's a smooth transition, and we land on the AIcurate main page."*

### Step 3: Exploring the Main Page (`/main`)

*   **Action**: Briefly scroll through the main page.
*   **Expected**:
    *   **Navbar**: Point out the navigation links ("Features", "Demo", "Testimonials"), the "Download Now" button, and the "Logout" button.
        *   *"The main page features a clean navbar for easy navigation and access to key sections like downloading the extension or logging out."*
    *   **Hero Section**: Briefly mention the value proposition and the custom logo.
        *   *"The hero section clearly communicates AIcurate's mission: to help users browse with confidence by identifying problematic content."*
    *   **Features Section**: Highlight the three core features verbally (Real-Time AI Detection, In-Page AI Explanation, User Feedback System).
        *   *"AIcurate offers powerful features: real-time detection of misinformation, clear in-page explanations with sources, and a user feedback system to continuously improve its accuracy."*
    *   **Demo Section ("See AIcurate in Action")**: Transition to this for the interactive part.
        *   *"Now, let's see a practical demonstration of how AIcurate works."*
    *   **Social Proof Section**: Briefly mention.
        *   *"We also showcase testimonials from satisfied users."*
    *   **CTA Section**: Point out the call to action.
        *   *"And a clear call to action to download the extension."*
    *   **Footer**: Standard footer links.

### Step 4: Interactive Demo - AIcurate in Action

*   **Action**: Scroll to the "See AIcurate in Action" section.
*   **Expected**: An article snippet about "Duranta Erecta" with an image and highlighted phrases.
    *   *"This section simulates browsing an article where AIcurate has identified potentially misleading information."*
*   **Action**: Click on the first highlighted phrase: `"Antartica, Russia, and Europe."`
*   **Expected**: A popover appears.
    *   **Content**:
        *   Title: "AICURATE"
        *   Explanation: "This description is false, as Duranta erecta is native to the tropical regions of the Americas..."
        *   Source Link: "Wikipedia - Duranta erecta" (mention it's clickable).
        *   Feedback buttons: Thumbs Up/Down.
    *   *"When a user clicks on a highlighted phrase, AIcurate provides an instant, in-page explanation. Here, it corrects the geographical origin of the plant and even provides a source link for verification. Users can also provide feedback on the explanation's helpfulness."*
*   **Action**: Click outside the popover or the Thumbs Up/Down button to close it.
*   **Action**: Click on the second highlighted phrase: `"their ability to feed on decaying material..."`
*   **Expected**: Another popover appears.
    *   **Content**:
        *   Title: "AICURATE"
        *   Explanation: "This description aligns more with the species Eulichas funebris. The importance of Duranta erecta lies in its potential use in the medical field..."
        *   Source Link: "Durantaerecta.com"
        *   Feedback buttons: Thumbs Up/Down.
    *   *"Here's another example. AIcurate clarifies a misattributed characteristic and provides correct information along with its source. This non-intrusive, contextual help is key to AIcurate's value."*
*   **Action**: Close the popover.

### Step 5: Extension Download Page Simulation

*   **Action**: Click the "Download AIcurate Now" button in the CTA section (or the "Download Now" button in the Navbar).
*   **Expected**: The user is redirected to the **Download Page** (`/download`).
    *   *"If a user is convinced, they can proceed to download the extension. Clicking the download button takes them to a page designed to mimic the Chrome Web Store."*
*   **Action**: On the Download Page, point out:
    *   Extension Name ("AIcurate"), Offered by, Ratings, User count.
    *   Placeholder screenshots.
    *   Overview, Features list, User Reviews.
    *   Additional Information (Version, Updated, Size).
    *   The main "Add to Chrome" button.
    *   *"This page provides all the information a user would expect before installing an extension."*
*   **Action**: Click the "Add to Chrome" button.
*   **Expected**: A dialog sequence begins:
    1.  **Confirmation Dialog**:
        *   Title: "Add 'AIcurate'?"
        *   Mock Permissions: "Read and change data on websites you visit", "Display notifications".
        *   Buttons: "Cancel", "Add extension".
        *   *"Clicking 'Add to Chrome' initiates a simulated installation process, starting with a confirmation dialog typical of browser extensions."*
    2.  **Action**: Click "Add extension".
    3.  **Installing Dialog**:
        *   Title: "Installing AIcurate..."
        *   Loading spinner and message.
        *   *"The system then shows an 'installing' state..."*
    4.  **Installed Dialog** (after a short delay):
        *   Title: "AIcurate has been added to Chrome" (with a checkmark icon).
        *   Brief message.
        *   Button: "Okay".
        *   *"...followed by a success message."*
    5.  **Action**: Click "Okay".
    6.  **Main Page Button Update**: The "Add to Chrome" button on the download page itself changes to "Added to Chrome" (with a checkmark) and becomes disabled.
        *   *"The download page reflects that the extension is now 'installed'."*

### Step 6: Logout

*   **Action**: Navigate back to the main application page (e.g., by clicking "AIcurate Home" in the download page header, or "AIcurate" logo in the main navbar if already there).
*   **Action**: Click the "Logout" button in the Navbar.
*   **Expected**:
    *   A toast notification ("Logged Out") appears.
    *   The user is redirected back to the **Login Page**.
    *   *"Finally, logging out is simple and returns the user to the login screen."*

## 7. Technologies Used

*   **Framework:** Next.js (v15+ with App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** ShadCN UI
*   **Icons:** Lucide React
*   **AI (Simulated Interaction / Potential Backend):** Genkit (configured with Google AI, used for defining AI flows like `flag-outdated-info.ts`)
*   **Linting/Formatting:** ESLint, Prettier (typically part of Next.js setups)

## 8. Project Structure

The project follows a standard Next.js App Router structure:

```
aicurate/
├── .env                  # Environment variables (e.g., API keys)
├── .vscode/              # VSCode settings
├── components/           # Reusable UI components
│   ├── landing/          # Components specific to landing page sections (Hero, Features, etc.)
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── ui/               # ShadCN UI components (Button, Card, Dialog, etc.)
├── components.json       # ShadCN UI configuration
├── hooks/                # Custom React hooks (e.g., useToast, useMobile)
├── lib/                  # Utility functions (e.g., cn for classnames)
├── public/               # Static assets
│   └── photos/           # Images used in the application (e.g., durantaerecta.png)
├── src/
│   ├── ai/               # Genkit AI related files
│   │   ├── flows/        # Genkit flow definitions (e.g., flag-outdated-info.ts)
│   │   ├── dev.ts        # Genkit development server entry point
│   │   └── genkit.ts     # Genkit core configuration
│   ├── app/              # Next.js App Router directory
│   │   ├── (pages)/      # Route groups and page files (e.g., login, register, main, download)
│   │   │   ├── login/page.tsx
│   │   │   ├── main/page.tsx
│   │   │   └── ...
│   │   ├── globals.css   # Global styles and Tailwind CSS theme variables
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Root page component (redirects to /login)
│   └── ...
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

*   **`src/app/`**: Contains all routes, layouts, and global styles. Each folder inside `app` typically represents a route segment.
*   **`src/components/`**: Houses reusable React components. `ui/` is for ShadCN components, `landing/` for specific page sections, and `layout/` for structural parts like Navbar/Footer.
*   **`src/lib/`**: Utility functions.
*   **`src/hooks/`**: Custom React hooks.
*   **`src/ai/`**: Genkit related code, including AI flow definitions.
*   **`public/`**: Static assets like images, directly accessible from the root URL.

## 9. Contributing

Currently, this project is primarily for demonstration purposes. If you wish to contribute:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name` or `bugfix/your-bug-fix`.
3.  **Make your changes.**
4.  **Commit your changes:** `git commit -m "Add: Your concise commit message"`.
5.  **Push to your branch:** `git push origin feature/your-feature-name`.
6.  **Open a Pull Request** against the `main` branch of the original repository.

Please ensure your code follows the existing style and conventions.

## 10. Known Issues / Limitations

*   **Simulated Backend:** User registration, login, and AI interactions are simulated. There is no actual backend database or persistent user data. User accounts are not saved beyond the current session for the demo.
*   **Genkit AI Flow:** The `flag-outdated-info.ts` flow is a basic structure. For a real application, it would require significant development to accurately analyze web content. The current demo section uses hardcoded explanations.
*   **No Real Extension:** The download page simulates the Chrome Web Store and extension installation. No actual browser extension is provided with this project.
*   **Content:** Most textual content (e.g., testimonials, detailed feature explanations not in the demo script) is placeholder or example content.
*   **Styling Specificity:** Some specific styling requests might have been interpreted; further refinements might be needed for pixel-perfect accuracy against an external design if one exists.

## 11. Future Improvements

*   **Full Backend Integration:** Implement a proper backend with a database (e.g., PostgreSQL, MongoDB) for user authentication and data storage.
*   **Real Authentication:** Integrate a robust authentication solution (e.g., NextAuth.js, Firebase Authentication, Clerk).
*   **Functional 2FA:** Implement actual Two-Factor Authentication via email using a service like SendGrid or AWS SES.
*   **Advanced Genkit AI Flows:**
    *   Develop sophisticated AI models and prompts for accurate content analysis.
    *   Integrate web scraping or API calls to fetch live content for analysis.
    *   Implement the user feedback loop to actually retrain or fine-tune the AI model.
*   **Develop the Browser Extension:** Create the actual AIcurate browser extension for Chrome, Firefox, etc.
*   **User Dashboard:** A section for logged-in users to manage settings, view flagged history, etc.
*   **Content Management System (CMS):** For easier updates to landing page content.
*   **Comprehensive Testing:** Unit, integration, and end-to-end tests.
*   **Accessibility (A11y) Enhancements:** Further review and improvements for accessibility.

---
