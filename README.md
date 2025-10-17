# Modern Profile Card

## 🚀 Frontend Wizards — Stage 0 Task: Build a Testable Profile Card

Welcome to Stage 0! 🎉 In this project, a small, accessible, responsive Profile Card component/page is built using semantic HTML, CSS, and vanilla JavaScript. Every visible element includes `data-testid` attributes so automated tests can target them.

### 📺 Task Explainer Video
[Watch here](https://vm.tiktok.com/ZMAXLFy8s/)

### 📚 Recommended Study Material
- [HTML semantics & accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)  
- [Accessible images & alt text](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Images)

---

## 📝 Task Requirements

### Core Content
Each element must exist and include the specified `data-testid`:

| Element | Data-testid |
|---------|------------|
| Profile card container | `test-profile-card` |
| Name | `test-user-name` |
| Short biography | `test-user-bio` |
| Current time (ms) | `test-user-time` |
| Avatar image | `test-user-avatar` |
| Social links list | `test-user-social-links` |
| Social links individually (optional) | `test-user-social-<platform>` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |

### HTML & Semantics
- Use semantic tags: `article`, `figure`, `nav`, `section`, `h1`-`h6`, `p`, `ul`, `li`  
- Interactive items (links/buttons) must be keyboard-focusable  
- Avatar inside `<figure>` with `<img>` and optional `<figcaption>`  
- Social links inside `<nav>` or `<ul>`  
- Hobbies/dislikes as `<ul>`/`<li>` lists  

### Responsiveness
- Card must look good on mobile, tablet, and desktop  
- Stack content vertically on small screens; arrange horizontally on wider screens  
- Ensure layout doesn’t break when content length changes  

### Behavior / Implementation
- Time must reflect `Date.now()` in milliseconds, updated on render  
- Avatar can accept URL or uploaded image (displayed via object URL)  
- Social links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`  
- Use Flexbox or Grid for layout  

### Acceptance Criteria
- All required elements exist and are discoverable via `data-testid`  
- Semantic HTML is used (`article`, `figure`, `nav`, `section`, headings)  
- Avatar includes `alt` attribute  
- Social links are keyboard-focusable and have visible focus  
- Time shows current milliseconds  
- Layout is responsive  

---

## ⚡ Submission Instructions
- Host project (Netlify, GitHub Pages, etc.) and provide live URL  
- Include GitHub repo link with this README and instructions to run locally  
- Include any relevant notes or tests  

**Submission Form:** [Submit Here](https://forms.gle/p7PcQ8nqVeH7rVcs9)  
**Deadline:** 19th October, 2025
