# 📝 React Native UI Challenge

This project is built using React Native to practice and improve fundamental UI design skills. It focuses on layout structures, responsive design, and smooth animations. 🎯

## 🚀 What's Inside?

### 1. **CenteredText**
- A centered `Text` component
- Aligned both vertically and horizontally using Flexbox

### 2. **ResponsiveButton**
- Responsive width (80% of screen width)
- Height is proportional to width
- Includes a surprise Easter Egg when pressed 😎

### 3. **Card**
- A clean card layout with an image, title, and description
- Includes padding, margins, and rounded borders for structure

### 4. **Animations** (`react-native-animatable`)
- Entry animations like `fadeInDown`, `slideInRight`, and `zoomIn`
- Re-trigger animations on scroll 🎬
- Wrapped in a custom `ScrollAwareAnimatableView` component for control

---

## 🧱 Tech Stack

- React Native (CLI)
- `react-native-animatable`
- Flexbox
- Animated API (used initially, later replaced by animatable for simplicity)

---

## ⚙️ Installation

```bash
git clone https://github.com/Enver-Onur-Cogalan/Mini-Challenge-Styling.git
cd Mini-Challenge-Styling
npm install
npx react-native run-android # or run-ios
```

---

## 📁 File Structure

```bash
src/
├── components/
│   ├── CenteredText.js
│   ├── ResponsiveButton.js
│   ├── Card.js
│   └── animations/
│       └── ScrollAwareAnimatableView.tsx
├── assets/
│   └── images/
│       └── sample.jpg
```

---

## ✨ Features

- Clean and readable code
- UI/UX aligned layout structure
- Responsive design suitable for all devices
- Great practice project for beginners 🧠

---

## 📌 Notes

- A special `LeafRain` component was tested to create a falling leaf animation.
  It was removed later due to scroll conflicts but remains a great example of advanced animation.

---

## 🧑‍💻 Contributor

- **Enver Onur Cogalan**

---

## 🤝 License

MIT
