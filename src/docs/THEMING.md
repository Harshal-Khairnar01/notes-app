# Theme System Documentation

The theme system provides light and dark mode functionality across the Memochive application.

## Theme Context

The `ThemeContext` manages the application's theme state and provides theme-switching functionality.

### Implementation (`theme.context.jsx`)

```javascript
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Apply theme to document root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

## Theme Toggle Component

Located in the Navbar, provides a smooth, animated toggle between light and dark modes.

### Features

- Animated toggle switch
- Dynamic icon changes (sun/moon)
- Smooth transitions
- Visual feedback

### Implementation Example (in Navbar)

```jsx
<button
  onClick={toggleTheme}
  className="w-14 h-8 flex items-center px-1 rounded-full transition-all 
             duration-300 ease-in-out bg-gray-300 dark:bg-gray-400 shadow-inner"
>
  <div
    className={`w-6 h-6 flex items-center justify-center rounded-full 
                   shadow-md transform transition-transform duration-300 
                   ${
                     theme === "dark"
                       ? "translate-x-6 bg-yellow-200"
                       : "translate-x-0 bg-gray-100"
                   }`}
  >
    {theme === "dark" ? <FiSun /> : <FiMoon />}
  </div>
</button>
```

## Styling System

### CSS Variables

Base colors and theme-specific variables are defined using CSS custom properties:

- `--color-primary`: Primary theme color
- `--color-primary-d`: Dark theme primary color

### Tailwind Classes

Theme-specific classes using the `dark:` modifier:

```css
.bg-[var(--color-primary)]
.dark:bg-[var(--color-primary-d)]
.text-black
.dark:text-white
```

### Theme Transitions

Smooth transitions between themes using:

- `transition-all`
- `duration-300`
- `ease-in-out`

## Usage

### Using Theme Context

```javascript
const { theme, toggleTheme } = useTheme();
```

### Conditional Styling

```jsx
<div className="text-black dark:text-white">Content adapts to theme</div>
```

### Theme-Aware Components

Components can use the theme context to:

- Render different icons
- Apply different styles
- Change behavior based on theme

## Best Practices

1. **Consistent Usage**

   - Use CSS variables for theme colors
   - Apply dark mode classes consistently
   - Follow transition patterns

2. **Accessibility**

   - Maintain proper contrast ratios
   - Use semantic color relationships
   - Provide clear visual indicators

3. **Performance**
   - Use CSS transitions for smooth changes
   - Avoid layout shifts during theme changes
   - Optimize theme-related calculations
