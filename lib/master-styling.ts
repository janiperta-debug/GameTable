// Master Styling Patterns - Extracted from Themes Page Success

export const MASTER_STYLES = {
  // Page Headers - Main titles should be gold like "Dimensional Manor System"
  pageTitle: "font-heading text-4xl font-bold text-accent-gold",
  pageSubtitle: "font-body text-muted-foreground text-lg",

  // Section Headers - Like "Your Progress", "Ground Floor"
  sectionTitle: "font-heading text-2xl font-bold", // Uses default foreground
  sectionSubtitle: "font-body text-sm text-muted-foreground",

  // Card Headers - Like card titles within sections
  cardTitle: "font-heading text-lg flex items-center", // or "font-heading" class
  cardSubtitle: "font-body text-sm text-muted-foreground",

  // Special Emphasis - Like "Level 12"
  emphasisLarge: "text-3xl font-bold text-accent-gold font-heading",
  emphasisMedium: "text-lg font-semibold font-heading",

  // Body Text
  bodyText: "font-body text-muted-foreground",
  bodyTextPrimary: "font-body",

  // Buttons - Theme-loyal styling
  primaryButton: "theme-primary font-body", // Uses theme colors
  secondaryButton: "theme-secondary font-body",
  accentButton: "theme-accent-gold font-body",

  // Badges - Theme-loyal unless functional
  accentBadge: "bg-accent-gold/10 text-accent-gold border-accent-gold/20",
  infoBadge: "bg-info/10 text-info border-info/20", // Functional - keep blue
  successBadge: "bg-success/10 text-success border-success/20", // Functional - keep green

  // Cards
  decorativeCard: "decorative-border",
  gradientCard: "decorative-border bg-gradient-to-r from-surface-light/50 to-accent-gold/10",

  // Icons with theme colors
  accentIcon: "text-accent-gold",
  primaryIcon: "text-primary",
  mutedIcon: "text-muted-foreground",
}

// Helper function to get consistent icon + title combinations
export function getIconTitleStyle(level: "page" | "section" | "card" = "section") {
  switch (level) {
    case "page":
      return {
        icon: MASTER_STYLES.accentIcon,
        title: MASTER_STYLES.pageTitle,
        subtitle: MASTER_STYLES.pageSubtitle,
      }
    case "section":
      return {
        icon: MASTER_STYLES.accentIcon,
        title: MASTER_STYLES.sectionTitle,
        subtitle: MASTER_STYLES.sectionSubtitle,
      }
    case "card":
      return {
        icon: MASTER_STYLES.accentIcon,
        title: MASTER_STYLES.cardTitle,
        subtitle: MASTER_STYLES.cardSubtitle,
      }
  }
}
