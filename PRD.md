# SainsIn — Landing Page Product Requirements Document

**Product:** SainsIn  
**Version:** Alpha  
**Type:** Landing Page / Marketing Website  
**UI System:** shadcn/ui + Tailwind CSS  
**Design Source:** `sainsin.com-DESIGN.md`  
**Authentication:** Tidak diperlukan  
**Admin Dashboard:** Tidak diperlukan  
**Database:** Tidak diperlukan untuk landing page  
**Status:** Implementation Ready

---

# 1. Product Overview

SainsIn adalah platform/brand edukasi yang dipresentasikan melalui sebuah landing page modern, profesional, ramah, dan mudah dipahami.

Landing page bertujuan untuk:

1. Memperkenalkan SainsIn.
2. Menjelaskan value proposition SainsIn.
3. Menampilkan layanan/produk/fitur yang ditawarkan.
4. Membangun kepercayaan pengunjung.
5. Mengarahkan pengunjung untuk menghubungi SainsIn.
6. Menyediakan informasi kontak yang jelas.
7. Memberikan pengalaman responsive pada desktop, tablet, dan mobile.

Website **tidak membutuhkan authentication atau dashboard**.

---

# 2. Scope

## Included

Landing page publik:

```text
/
```

Section yang diperlukan:

```text
Navbar
Hero
About / Introduction
Services / Features
Benefits / Value Proposition
Supporting Section
CTA
Contact
Footer
```

Section final harus mengikuti struktur yang benar-benar tersedia pada `sainsin.com-DESIGN.md`.

---

# 3. Out of Scope

Jangan membuat:

```text
/login
/register
/dashboard
/admin
/profile
/settings
/tryout
/checkout
/cart
/user account
authentication
authorization
database CRUD
admin panel
```

Tidak diperlukan:

- user registration
- user login
- password
- session management
- role management
- admin dashboard
- protected routes
- user database

---

# 4. Route Architecture

Landing page hanya memiliki satu primary route:

```text
/
```

Section dapat menggunakan anchor:

```text
/#about
/#services
/#benefits
/#contact
```

Contoh:

```text
Home       → /
Tentang    → /#about
Layanan    → /#services
Keunggulan → /#benefits
Kontak     → /#contact
```

Tidak perlu membuat route baru untuk setiap section.

---

# 5. Navigation

Navbar harus memiliki:

```text
Logo SainsIn
Tentang
Layanan
Keunggulan
Kontak
CTA Contact
```

Navigasi desktop menggunakan horizontal navigation.

Navigasi mobile menggunakan:

```text
shadcn/ui Sheet
```

Mobile menu harus:

- dapat dibuka
- dapat ditutup
- dapat ditutup dengan Escape
- memiliki focus management
- memiliki active/hover state
- menutup setelah navigasi anchor
- tidak mengganggu scrolling halaman

---

# 6. Hero Section

Hero adalah bagian pertama yang dilihat pengunjung.

Tujuan:

- menjelaskan SainsIn secara cepat
- menyampaikan value proposition
- mengarahkan user ke CTA
- membangun visual identity

Struktur:

```text
Eyebrow / Label

Main Heading

Supporting Description

Primary CTA
Secondary CTA / Link

Visual / Illustration
```

Gunakan typography dan visual hierarchy dari `DESIGN.md`.

Jangan menambahkan copy baru yang tidak didukung oleh source jika copy tersebut mengubah positioning SainsIn.

---

# 7. Hero CTA

CTA utama harus mengarah ke contact section:

```text
/#contact
```

Contoh konsep:

```text
Hubungi Kami
```

CTA kedua dapat berupa:

```text
Pelajari Lebih Lanjut
```

yang mengarah ke section internal.

Tidak boleh terdapat CTA:

```text
Login
Register
Dashboard
Mulai Tryout
```

karena fitur tersebut tidak termasuk scope.

---

# 8. About Section

Section ini menjelaskan:

- siapa/apa SainsIn
- tujuan SainsIn
- positioning
- nilai yang ditawarkan

Gunakan struktur visual dari DESIGN.md.

Contoh:

```text
About SainsIn

[Visual]

Description
Description

Key Value
Key Value
Key Value
```

Copy harus berasal dari informasi yang tersedia pada source/design/brief yang diberikan.

Jika informasi tidak tersedia, gunakan placeholder yang jelas atau minta input konten; jangan mengarang fakta perusahaan.

---

# 9. Services / Features Section

Section digunakan untuk menjelaskan produk atau layanan utama SainsIn.

Gunakan:

```text
Card
Icon
Heading
Description
```

dengan shadcn/ui `Card` sebagai component foundation.

Contoh struktur:

```text
┌──────────────┐
│ Icon         │
│              │
│ Feature 01   │
│ Description  │
└──────────────┘

┌──────────────┐
│ Icon         │
│              │
│ Feature 02   │
│ Description  │
└──────────────┘

┌──────────────┐
│ Icon         │
│              │
│ Feature 03   │
│ Description  │
└──────────────┘
```

Jumlah card mengikuti konten yang tersedia.

---

# 10. Benefits / Value Proposition

Tampilkan alasan pengunjung perlu mengenal atau menggunakan SainsIn.

Gunakan:

- heading
- supporting copy
- icon/illustration
- feature list
- visual hierarchy

Jangan membuat angka/statistik palsu.

Dilarang membuat:

```text
10.000+ pengguna
99% berhasil
500+ sekolah
```

jika tidak terdapat data tersebut pada source.

---

# 11. Supporting Section

Jika `DESIGN.md` memiliki section visual tambahan, implementasikan sesuai desain.

Contohnya dapat berupa:

```text
Illustration section
Feature highlight
Process
Testimonial
Statistics
FAQ
```

Tetapi hanya implementasikan jika didukung oleh source/brief.

Jangan menambahkan section hanya untuk memenuhi jumlah halaman.

---

# 12. CTA Section

Sebelum Contact section, sediakan CTA utama.

Tujuannya:

> Mengubah visitor menjadi calon kontak/customer/partner.

Contoh struktur:

```text
Ready to connect with SainsIn?

Supporting description

[Hubungi Kami]
```

CTA:

```text
/#contact
```

---

# 13. Contact Section

Contact merupakan salah satu bagian paling penting dari website.

Karena tidak ada authentication/dashboard, pengunjung harus dapat menemukan cara menghubungi SainsIn dengan mudah.

Minimal tampilkan sumber kontak yang tersedia.

Contoh:

```text
Contact SainsIn

Email
[alamat email]

WhatsApp
[nomor WhatsApp]

Instagram
[akun Instagram]

LinkedIn
[akun LinkedIn]

Address
[alamat jika tersedia]
```

**Jangan membuat alamat, nomor telepon, email, atau akun sosial palsu.**

Jika informasi kontak belum tersedia pada source, gunakan placeholder yang jelas untuk diganti.

---

# 14. Contact CTA

Setiap contact method harus memiliki action yang sesuai.

### Email

Gunakan:

```text
mailto:
```

### WhatsApp

Gunakan:

```text
https://wa.me/...
```

jika nomor tersedia.

### Instagram

Link menuju akun Instagram resmi.

### LinkedIn

Link menuju akun LinkedIn resmi.

### Website

Link menuju website resmi jika diperlukan.

External links harus:

- valid
- menggunakan HTTPS jika tersedia
- membuka dengan behavior yang aman jika membuka tab baru

---

# 15. Contact Form

Contact form **tidak wajib**.

Landing page default sebaiknya menggunakan contact links apabila tidak ada backend.

Jika tidak ada backend/API untuk contact form:

**Jangan membuat form yang seolah-olah dapat mengirim pesan.**

Alternatif:

```text
Hubungi melalui WhatsApp
Kirim Email
```

Jika suatu saat backend tersedia, contact form dapat ditambahkan sebagai fitur terpisah.

---

# 16. Footer

Footer harus berisi:

```text
SainsIn Logo
Short Description
Navigation
Contact
Social Links
Copyright
```

Contoh:

```text
SainsIn

[description]

Tentang
Layanan
Keunggulan
Kontak

Email
WhatsApp
Instagram
LinkedIn

© 2026 SainsIn. All rights reserved.
```

Gunakan data aktual yang tersedia.

---

# 17. shadcn/ui

shadcn/ui digunakan sebagai component foundation.

Komponen yang kemungkinan diperlukan:

```text
Button
Card
Badge
Sheet
Separator
Accordion
Tooltip
```

Jika menggunakan contact form:

```text
Input
Textarea
Label
Form
```

Jangan menginstall komponen yang tidak digunakan.

---

# 18. shadcn/ui Customization

**Jangan menggunakan default shadcn/ui secara mentah.**

shadcn/ui harus disesuaikan dengan SainsIn.

Relationship:

```text
DESIGN.md
     ↓
Design Tokens
     ↓
Tailwind
     ↓
shadcn/ui
     ↓
SainsIn Components
```

Hasil akhir harus terlihat sebagai:

> SainsIn website yang menggunakan shadcn/ui

bukan:

> website template shadcn/ui.

---

# 19. Color System

Gunakan color tokens dari `DESIGN.md`.

Primary source:

```text
#FFFFFF
#F4FAF7
#222222
```

Gunakan accent/functional colors sebagaimana ditentukan pada DESIGN.md.

Jika menggunakan emerald accent dari design:

```text
#00A870
```

jadikan semantic token.

Contoh:

```css
--primary: ... --background: ... --foreground: ... --muted: ... --border: ...;
```

Jangan mengulang hardcoded color di seluruh component.

---

# 20. Typography

Gunakan typography berdasarkan DESIGN.md.

### Montserrat

Untuk:

- hero heading
- display
- major heading
- emphasis

### Poppins

Untuk:

- body
- navigation
- button
- description
- labels

Typography harus mengikuti hierarchy yang sudah ditentukan.

---

# 21. Card Design

Gunakan shadcn `Card`.

Card harus mengikuti:

- radius
- spacing
- shadow
- border
- padding
- hover behavior

dari DESIGN.md.

Jangan menggunakan default card style jika tidak sesuai.

---

# 22. Button Design

Gunakan shadcn `Button`.

Minimal:

```text
Primary
Secondary
Outline
Ghost
```

Button harus memiliki:

```text
default
hover
active
focus
disabled
```

Gunakan button hanya untuk action.

Untuk navigasi sederhana gunakan link.

---

# 23. Responsive Design

Website wajib responsive pada:

```text
375px
768px
1024px
1280px
1440px
```

Container mengikuti ukuran dari DESIGN.md:

```text
375 → 343px
768 → 720px
1024 → 960px
1280 → 1216px
1440 → 1280px
```

---

# 24. Mobile Experience

Mobile bukan sekadar desktop yang diperkecil.

Perhatikan:

- navbar
- typography
- hero
- card layout
- CTA
- spacing
- contact
- footer

Hero harus tetap mudah dibaca.

CTA harus memiliki touch target minimal sekitar:

```text
44 × 44px
```

---

# 25. Smooth Scrolling

Anchor navigation dapat menggunakan smooth scrolling.

Contoh:

```text
/#about
/#services
/#benefits
/#contact
```

Pastikan smooth scrolling tidak mengganggu accessibility atau keyboard navigation.

---

# 26. Accessibility

Target minimum:

```text
WCAG AA
```

Pastikan:

- semantic HTML
- heading hierarchy
- alt text
- accessible navigation
- keyboard navigation
- visible focus
- sufficient color contrast
- accessible buttons
- accessible links
- mobile menu accessibility

Jangan hanya menggunakan warna untuk menyampaikan informasi.

---

# 27. SEO

Landing page harus memiliki:

```text
title
description
canonical
Open Graph
Twitter/X metadata
```

Jika data tersedia.

Gunakan semantic structure:

```html
<header>
  <main>
    <section>
      <footer></footer>
    </section>
  </main>
</header>
```

Heading harus memiliki hierarchy yang benar.

---

# 28. Performance

Landing page harus ringan.

Prioritas:

- optimized images
- lazy loading untuk image non-critical
- responsive images
- minimal JavaScript
- minimize unnecessary dependencies
- avoid unnecessary client-side state
- avoid unnecessary API requests

Karena ini landing page, tidak perlu kompleksitas state management besar.

---

# 29. Animation

Animation harus subtle.

Gunakan:

- fade
- slide
- hover
- micro interaction

Hindari:

- excessive animation
- animation yang mengganggu reading
- animation yang memperlambat CTA
- excessive parallax

Respect:

```text
prefers-reduced-motion
```

---

# 30. Loading State

Karena landing page tidak membutuhkan API utama, sebisa mungkin tidak membuat loading screen yang tidak perlu.

Untuk image atau dynamic content:

```text
Skeleton
```

dapat digunakan jika memang diperlukan.

Jangan menampilkan:

```text
Loading...
```

selama seluruh landing page jika semua konten statis.

---

# 31. Error Handling

Landing page tidak membutuhkan complex error handling.

Tetapi jika terdapat external resource/API:

```text
network error
image error
contact action error
```

harus memiliki graceful fallback.

---

# 32. 404

Jika framework mendukung custom 404, buat halaman sederhana yang tetap menggunakan design system SainsIn.

Contoh:

```text
404

Halaman tidak ditemukan.

[Kembali ke Beranda]
```

---

# 33. No Fake Content

Ini adalah requirement penting.

Jangan membuat:

- fake testimonial
- fake statistics
- fake customer
- fake partner
- fake contact
- fake address
- fake social media
- fake company information

Jika data belum tersedia:

```text
TODO: Replace with official contact information
```

atau gunakan placeholder yang jelas dalam source code.

---

# 34. External Contact Sources

Contact information harus dibuat centralized.

Contoh:

```text
config/
└── contact.ts
```

atau:

```ts
const contact = {
  email: "...",
  whatsapp: "...",
  instagram: "...",
  linkedin: "...",
};
```

Dengan begitu informasi kontak dapat diubah tanpa mencari seluruh component.

---

# 35. Component Architecture

Recommended:

```text
src/
├── components/
│   ├── ui/
│   │   └── shadcn/
│   │
│   ├── layout/
│   │   ├── Header
│   │   ├── MobileNav
│   │   └── Footer
│   │
│   ├── sections/
│   │   ├── Hero
│   │   ├── About
│   │   ├── Services
│   │   ├── Benefits
│   │   ├── CTA
│   │   └── Contact
│   │
│   └── common/
│       ├── SectionHeading
│       └── Container
│
├── config/
│   └── contact
│
├── lib/
│
├── styles/
│
└── app/
    └── page
```

Sesuaikan dengan framework existing.

---

# 36. Component Responsibility

Jangan membuat satu file page yang berisi seluruh UI.

Pisahkan:

```text
Header
Hero
About
Services
Benefits
CTA
Contact
Footer
```

agar mudah dirawat.

---

# 37. Route Rules

Satu route utama:

```text
/
```

Anchor:

```text
#about
#services
#benefits
#contact
```

Semua navigation harus diverifikasi.

Tidak boleh ada link ke:

```text
/login
/register
/dashboard
/admin
```

---

# 38. Navigation Audit

Cari semua:

```text
href
Link
router.push
button CTA
navigation item
footer link
social link
```

Pastikan semuanya valid.

Test:

```text
Home → /
Tentang → /#about
Layanan → /#services
Keunggulan → /#benefits
Kontak → /#contact
```

---

# 39. Contact Audit

Verifikasi setiap contact source:

```text
Email → mailto
WhatsApp → wa.me
Instagram → official profile
LinkedIn → official profile
```

Tidak boleh ada:

```text
undefined
null
example.com
example@gmail.com
08123456789
```

di production.

---

# 40. Testing

Minimal test:

### Navigation

```text
Home
About
Services
Benefits
Contact
Footer
```

### Responsive

```text
375
768
1024
1280
1440
```

### Mobile

```text
open menu
close menu
escape
anchor navigation
```

### Contact

```text
email link
WhatsApp link
social links
```

### Accessibility

```text
keyboard
focus
screen reader labels
contrast
heading hierarchy
```

---

# 41. Build Verification

Jalankan command berdasarkan project.

Umumnya:

```bash
npm run lint
npm run typecheck
npm run build
```

Jika test tersedia:

```bash
npm run test
```

Jangan menyatakan selesai jika production build gagal.

---

# 42. Definition of Done

Landing page dianggap selesai jika:

```text
[ ] Homepage implemented
[ ] Navigation implemented
[ ] Hero implemented
[ ] About implemented
[ ] Services implemented
[ ] Benefits implemented
[ ] CTA implemented
[ ] Contact implemented
[ ] Footer implemented
[ ] shadcn/ui integrated
[ ] shadcn/ui customized
[ ] DESIGN.md followed
[ ] Responsive
[ ] Accessibility
[ ] SEO
[ ] Contact links valid
[ ] No fake contact information
[ ] No dead links
[ ] No login
[ ] No register
[ ] No dashboard
[ ] No admin
[ ] Lint passes
[ ] Typecheck passes
[ ] Build passes
```

---

# 43. Final Product Structure

Hasil akhir secara konseptual:

```text
                    SainsIn
                       │
                       ▼
                 ┌───────────┐
                 │   Navbar  │
                 └─────┬─────┘
                       │
                       ▼
                 ┌───────────┐
                 │   Hero    │
                 └─────┬─────┘
                       │
                       ▼
                 ┌───────────┐
                 │   About   │
                 └─────┬─────┘
                       │
                       ▼
               ┌───────────────┐
               │    Services   │
               └───────┬───────┘
                       │
                       ▼
               ┌───────────────┐
               │    Benefits   │
               └───────┬───────┘
                       │
                       ▼
                 ┌───────────┐
                 │    CTA    │
                 └─────┬─────┘
                       │
                       ▼
                 ┌───────────┐
                 │  Contact  │
                 └─────┬─────┘
                       │
                       ▼
                 ┌───────────┐
                 │   Footer  │
                 └───────────┘
```

---

# 44. Final Principle

SainsIn landing page harus memenuhi:

```text
SainsIn
+
DESIGN.md
+
shadcn/ui
+
Responsive
+
Accessible
+
SEO
+
Valid Contact
```

dan **bukan**:

```text
Authentication
+
Dashboard
+
Admin
+
Database
+
Complex State
```

Landing page harus tetap sederhana, cepat, profesional, dan fokus pada satu tujuan utama:

> **Memperkenalkan SainsIn dan memudahkan pengunjung menghubungi SainsIn.**
