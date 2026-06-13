const i18n = {
  es: {
    "theme.dark": "Oscuro",
    "theme.light": "Claro",
    "back.home": "Volver al inicio",
    "form.title": "Formulario de consulta para pacientes",
    "form.subtitle": "Este formulario está diseñado para pacientes que buscan atención médica. Nuestro equipo de recepción revisará tu solicitud y te llamará para confirmar disponibilidad.",
    "provider.note": "¿Eres un proveedor de salud u organización que busca asociarse con HealthCore? Contacta a nuestro equipo de operaciones en",
    "labels.first_name": "Nombre",
    "labels.last_name": "Apellido",
    "labels.date_of_birth": "Fecha de nacimiento",
    "labels.email": "Correo electrónico",
    "labels.phone": "Número de teléfono",
    "labels.preferred_language": "Idioma preferido",
    "labels.preferred_clinic": "Clínica preferida",
    "labels.preferred_date": "Fecha preferida",
    "labels.preferred_time": "Franja horaria preferida",
    "labels.service_type": "Servicio requerido",
    "labels.new_patient": "¿Es tu primera visita a HealthCore?",
    "labels.has_insurance": "¿Tienes seguro médico?",
    "labels.insurance_provider": "Aseguradora",
    "labels.insurance_member_id": "ID de afiliado",
    "labels.health_concern": "Descripción breve de tu consulta médica",
    "labels.contact_consent": "Consiento que HealthCore me contacte",
    "select.choose": "Selecciona una opción",
    "time.morning": "Mañana (7am-12pm)",
    "time.afternoon": "Tarde (12pm-5pm)",
    "time.evening": "Noche (5pm-8pm)",
    "help.preferred_date": "Mínimo 1 día hábil desde hoy y máximo 60 días hacia adelante.",
    "cta.submit": "Enviar consulta",
    "form.status": "Validaremos todos los campos antes de enviar.",
    "footer.rights": "© 2025 HealthCore. Todos los derechos reservados.",
    placeholders: {
      phone: "+1 305 555 0191",
      patientId: "HC-A3F291"
    },
    warnings: {
      evening: "Advertencia: esta combinación es poco probable que esté disponible en horario Evening (5pm-8pm)."
    },
    errors: {
      first_name: "El nombre debe contener solo letras y tener al menos 2 caracteres",
      last_name: "El apellido debe contener solo letras y tener al menos 2 caracteres",
      date_of_birth: "Ingresa una fecha de nacimiento válida. El paciente debe tener entre 0 y 120 años",
      email: "Ingresa un correo electrónico válido (ejemplo: nombre@proveedor.com)",
      phone: "El teléfono debe incluir un código de país (ejemplo: +1 305 555 0191)",
      preferred_language: "Selecciona tu idioma preferido",
      preferred_clinic: "Selecciona la clínica que te gustaría visitar",
      preferred_date: "Selecciona una fecha de al menos 1 día hábil desde hoy y no más de 60 días hacia adelante",
      preferred_time: "Selecciona tu franja horaria preferida",
      service_type: "Selecciona el tipo de atención que estás buscando",
      paediatric: "Paediatric Care está disponible para pacientes menores de 18 años. Revisa la fecha de nacimiento o selecciona un servicio diferente.",
      new_patient: "Indica si esta es tu primera visita a HealthCore",
      has_insurance: "Indica si tienes seguro médico",
      insurance_provider: "Ingresa el nombre de tu aseguradora",
      insurance_member_id: "El ID de afiliado debe tener entre 6 y 20 caracteres alfanuméricos",
      patient_id: "Patient ID debe tener el formato HC- seguido de 6 caracteres alfanuméricos",
      health_concern: "Describe tu consulta médica en al menos 20 caracteres (faltan {missing} caracteres)",
      contact_consent: "Debes dar tu consentimiento para ser contactado antes de enviar este formulario"
    },
    success: "Gracias por contactar a HealthCore.\nHemos recibido tu consulta. Un miembro de nuestro equipo de recepción se pondrá en contacto contigo dentro de 1 día hábil para confirmar los detalles de tu cita y responder cualquier pregunta.\nSi necesitas asistencia urgente, llama directamente a tu clínica preferida usando los números listados en nuestro sitio web.\nEsperamos poder atenderte pronto."
  },
  en: {
    "theme.dark": "Dark",
    "theme.light": "Light",
    "back.home": "Back to home",
    "form.title": "Patient inquiry form",
    "form.subtitle": "This form is designed for patients seeking medical care. Our reception team will review your request and call you to confirm availability.",
    "provider.note": "Are you a healthcare provider or organization looking to partner with HealthCore? Contact our operations team at",
    "labels.first_name": "First name",
    "labels.last_name": "Last name",
    "labels.date_of_birth": "Date of birth",
    "labels.email": "Email",
    "labels.phone": "Phone number",
    "labels.preferred_language": "Preferred language",
    "labels.preferred_clinic": "Preferred clinic",
    "labels.preferred_date": "Preferred date",
    "labels.preferred_time": "Preferred time slot",
    "labels.service_type": "Service required",
    "labels.new_patient": "Is this your first visit to HealthCore?",
    "labels.has_insurance": "Do you have health insurance?",
    "labels.insurance_provider": "Insurance provider",
    "labels.insurance_member_id": "Member ID",
    "labels.health_concern": "Brief description of your medical concern",
    "labels.contact_consent": "I consent to be contacted by HealthCore",
    "select.choose": "Select an option",
    "time.morning": "Morning (7am-12pm)",
    "time.afternoon": "Afternoon (12pm-5pm)",
    "time.evening": "Evening (5pm-8pm)",
    "help.preferred_date": "At least 1 business day from today and no more than 60 days ahead.",
    "cta.submit": "Submit inquiry",
    "form.status": "We will validate all fields before submitting.",
    "footer.rights": "© 2025 HealthCore. All rights reserved.",
    placeholders: {
      phone: "+1 305 555 0191",
      patientId: "HC-A3F291"
    },
    warnings: {
      evening: "Warning: this combination is unlikely to be available during Evening (5pm-8pm)."
    },
    errors: {
      first_name: "First name must contain only letters and be at least 2 characters",
      last_name: "Last name must contain only letters and be at least 2 characters",
      date_of_birth: "Enter a valid date of birth. Patient age must be between 0 and 120 years",
      email: "Enter a valid email address (example: name@provider.com)",
      phone: "Phone must include a country code (example: +1 305 555 0191)",
      preferred_language: "Select your preferred language",
      preferred_clinic: "Select the clinic you would like to visit",
      preferred_date: "Select a date at least 1 business day from today and no more than 60 days ahead",
      preferred_time: "Select your preferred time slot",
      service_type: "Select the type of care you are looking for",
      paediatric: "Paediatric Care is available for patients under 18. Review date of birth or select a different service.",
      new_patient: "Indicate whether this is your first visit to HealthCore",
      has_insurance: "Indicate whether you have health insurance",
      insurance_provider: "Enter your insurance provider",
      insurance_member_id: "Member ID must be between 6 and 20 alphanumeric characters",
      patient_id: "Patient ID must follow HC- plus 6 alphanumeric characters",
      health_concern: "Describe your medical concern in at least 20 characters ({missing} characters missing)",
      contact_consent: "You must provide consent before submitting this form"
    },
    success: "Thank you for contacting HealthCore.\nWe have received your inquiry. A member of our reception team will contact you within 1 business day to confirm your appointment details and answer any questions.\nIf you need urgent assistance, call your preferred clinic directly using the numbers listed on our website.\nWe look forward to caring for you soon."
  }
};

function normalizeLang(lang) {
  return lang === "en" ? "en" : "es";
}

function buildRouteHref(rawHref, lang, theme) {
  const url = new URL(rawHref, window.location.href);
  url.searchParams.set("lang", lang);
  url.searchParams.set("theme", theme);
  return `${url.pathname}${url.search}${url.hash}`;
}

function syncCurrentUrlState() {
  const params = new URLSearchParams(window.location.search);
  const lang = normalizeLang(localStorage.getItem("lang") || "es");
  const theme = localStorage.getItem("theme") === "dark" ? "dark" : "light";
  params.set("lang", lang);
  params.set("theme", theme);
  const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history.replaceState({}, "", nextUrl);
}

function syncRouteLinks() {
  const lang = normalizeLang(localStorage.getItem("lang") || "es");
  const theme = localStorage.getItem("theme") === "dark" ? "dark" : "light";

  document.querySelectorAll("[data-route-link]").forEach((link) => {
    const baseHref = link.getAttribute("href") || "";
    link.setAttribute("href", buildRouteHref(baseHref, lang, theme));
  });
}

function setLanguage(lang) {
  const resolvedLang = normalizeLang(lang);
  const dict = i18n[resolvedLang] || i18n.es;
  document.documentElement.lang = resolvedLang;
  localStorage.setItem("lang", resolvedLang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-lang-btn") === resolvedLang;
    btn.classList.toggle("bg-cyan-700", active);
    btn.classList.toggle("text-white", active);
    btn.classList.toggle("dark:bg-cyan-500", active);
  });

  phone.placeholder = dict.placeholders.phone;
  patientId.placeholder = dict.placeholders.patientId;

  const isDark = document.documentElement.classList.contains("dark");
  const themeLabel = document.getElementById("theme-toggle-label");
  const themeButton = document.getElementById("theme-toggle");
  const moonIcon = document.querySelector('[data-theme-icon="moon"]');
  const sunIcon = document.querySelector('[data-theme-icon="sun"]');
  if (themeLabel) {
    themeLabel.textContent = isDark ? dict["theme.light"] : dict["theme.dark"];
  }
  if (themeButton) {
    themeButton.setAttribute("aria-label", isDark ? dict["theme.light"] : dict["theme.dark"]);
  }
  if (moonIcon && sunIcon) {
    moonIcon.classList.toggle("hidden", isDark);
    sunIcon.classList.toggle("hidden", !isDark);
  }

  updateEveningWarning();
  syncRouteLinks();
  syncCurrentUrlState();
}

function setTheme(mode) {
  const root = document.documentElement;
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  const resolvedMode = mode === "dark" ? "dark" : "light";
  localStorage.setItem("theme", resolvedMode);
  const lang = localStorage.getItem("lang") || "es";
  const dict = i18n[lang] || i18n.es;
  const themeLabel = document.getElementById("theme-toggle-label");
  const themeButton = document.getElementById("theme-toggle");
  const moonIcon = document.querySelector('[data-theme-icon="moon"]');
  const sunIcon = document.querySelector('[data-theme-icon="sun"]');
  if (themeLabel) {
    themeLabel.textContent = resolvedMode === "dark" ? dict["theme.light"] : dict["theme.dark"];
  }
  if (themeButton) {
    themeButton.setAttribute("aria-label", resolvedMode === "dark" ? dict["theme.light"] : dict["theme.dark"]);
  }
  if (moonIcon && sunIcon) {
    moonIcon.classList.toggle("hidden", resolvedMode === "dark");
    sunIcon.classList.toggle("hidden", resolvedMode !== "dark");
  }

  syncRouteLinks();
  syncCurrentUrlState();
}

document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang-btn")));
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  const nextMode = document.documentElement.classList.contains("dark") ? "light" : "dark";
  setTheme(nextMode);
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
requestAnimationFrame(() => {
  document.body.classList.remove("opacity-0");
  document.body.classList.add("opacity-100");
});

if (!prefersReducedMotion) {
  document.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const href = link.getAttribute("href") || "";
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      const targetUrl = new URL(link.href, window.location.href);
      const sameOrigin = targetUrl.origin === window.location.origin;
      const isHtmlPage = targetUrl.pathname.endsWith(".html");
      const samePath = targetUrl.pathname === window.location.pathname;

      if (!sameOrigin || !isHtmlPage || samePath || link.target === "_blank") {
        return;
      }

      event.preventDefault();
      document.body.classList.add("opacity-0");
      document.body.classList.remove("opacity-100");
      setTimeout(() => {
        window.location.href = targetUrl.href;
      }, 180);
    });
  });

  if (window.location.hash) {
    const hashTarget = document.querySelector(window.location.hash);
    if (hashTarget) {
      setTimeout(() => {
        const header = document.querySelector("header");
        const offset = header ? header.offsetHeight + 12 : 0;
        const top = hashTarget.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }, 80);
    }
  }
}

const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
if (prefersReducedMotion) {
  revealItems.forEach((item) => {
    item.classList.remove("opacity-0", "translate-y-4");
    item.classList.add("opacity-100", "translate-y-0");
  });
} else if (revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = entry.target;
        const delay = Number.parseInt(target.getAttribute("data-reveal-delay") || "0", 10);
        setTimeout(() => {
          target.classList.remove("opacity-0", "translate-y-4");
          target.classList.add("opacity-100", "translate-y-0");
        }, Number.isNaN(delay) ? 0 : delay);

        observer.unobserve(target);
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const form = document.getElementById("application-form");
const successMessage = document.getElementById("success-message");
const warningTimeClinic = document.getElementById("warning-time-clinic");
const healthCounter = document.getElementById("health-counter");

const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const dateOfBirth = document.getElementById("date_of_birth");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const preferredLanguage = document.getElementById("preferred_language");
const preferredClinic = document.getElementById("preferred_clinic");
const preferredDate = document.getElementById("preferred_date");
const preferredTime = document.getElementById("preferred_time");
const serviceType = document.getElementById("service_type");
const insuranceProvider = document.getElementById("insurance_provider");
const insuranceMemberId = document.getElementById("insurance_member_id");
const healthConcern = document.getElementById("health_concern");
const contactConsent = document.getElementById("contact_consent");
const patientId = document.getElementById("patient_id");

const patientIdWrapper = document.getElementById("patient-id-wrapper");
const insuranceProviderWrapper = document.getElementById("insurance-provider-wrapper");
const insuranceMemberWrapper = document.getElementById("insurance-member-wrapper");

const clinicCloseHours = {
  "HealthCore Austin Central": 20,
  "HealthCore Austin North": 19,
  "HealthCore San Antonio": 18,
  "HealthCore Miami": 20,
  "HealthCore Orlando": 18,
  "HealthCore Atlanta": 19
};

function currentLang() {
  return localStorage.getItem("lang") || "es";
}

function currentDict() {
  return i18n[currentLang()] || i18n.es;
}

function getErrorEl(name) {
  return document.getElementById(`error-${name}`);
}

function setInvalid(el, invalid) {
  if (!el) {
    return;
  }
  if (invalid) {
    el.setAttribute("aria-invalid", "true");
  } else {
    el.removeAttribute("aria-invalid");
  }
}

function clearErrors() {
  form.querySelectorAll("[id^='error-']").forEach((el) => {
    el.textContent = "";
  });
  form.querySelectorAll("input, select, textarea").forEach((el) => {
    setInvalid(el, false);
  });
  warningTimeClinic.textContent = "";
  successMessage.textContent = "";
}

function selectedRadioValue(name) {
  const selected = form.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : "";
}

function setDateBounds() {
  const today = new Date();
  const minDate = addBusinessDays(today, 1);
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 60);
  preferredDate.min = formatDate(minDate);
  preferredDate.max = formatDate(maxDate);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addBusinessDays(baseDate, days) {
  const date = new Date(baseDate);
  let added = 0;
  while (added < days) {
    date.setDate(date.getDate() + 1);
    const day = date.getDay();
    if (day !== 0 && day !== 6) {
      added += 1;
    }
  }
  return date;
}

function isValidName(value) {
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{2,50}$/.test(value.trim());
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validPhone(value) {
  return /^\+[0-9]{1,3}(?:[\s-]?[0-9]{2,4}){2,5}$/.test(value.trim());
}

function parseDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function ageFromDOB(dob) {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age -= 1;
  }
  return age;
}

function toggleConditionalFields() {
  const hasInsurance = selectedRadioValue("has_insurance") === "Yes";
  insuranceProviderWrapper.classList.toggle("hidden", !hasInsurance);
  insuranceMemberWrapper.classList.toggle("hidden", !hasInsurance);
  if (!hasInsurance) {
    insuranceProvider.value = "";
    insuranceMemberId.value = "";
  }

  const isReturning = selectedRadioValue("new_patient") === "No";
  patientIdWrapper.classList.toggle("hidden", !isReturning);
  if (!isReturning) {
    patientId.value = "";
  }
}

function updateHealthCounter() {
  const len = healthConcern.value.trim().length;
  healthCounter.textContent = `${len} / 500`;
}

function updateEveningWarning() {
  warningTimeClinic.textContent = "";
  if (preferredTime.value !== "Evening (5pm-8pm)") {
    return;
  }
  const clinic = preferredClinic.value;
  if (!clinic) {
    return;
  }
  const closing = clinicCloseHours[clinic];
  if (closing === 18 || closing === 19) {
    warningTimeClinic.textContent = currentDict().warnings.evening;
  }
}

function setError(fieldKey, message, element) {
  const err = getErrorEl(fieldKey);
  if (err) {
    err.textContent = message;
  }
  setInvalid(element, true);
}

form.addEventListener("change", (event) => {
  const target = event.target;
  if (target.name === "has_insurance" || target.name === "new_patient") {
    toggleConditionalFields();
  }
  if (target.id === "preferred_time" || target.id === "preferred_clinic") {
    updateEveningWarning();
  }
});

healthConcern.addEventListener("input", updateHealthCounter);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();
  toggleConditionalFields();
  updateEveningWarning();

  const dict = currentDict();
  let hasError = false;

  if (!isValidName(firstName.value)) {
    setError("first_name", dict.errors.first_name, firstName);
    hasError = true;
  }

  if (!isValidName(lastName.value)) {
    setError("last_name", dict.errors.last_name, lastName);
    hasError = true;
  }

  const dob = parseDate(dateOfBirth.value);
  const today = new Date();
  const oldest = new Date(today);
  oldest.setFullYear(today.getFullYear() - 120);
  if (!dob || dob > today || dob < oldest) {
    setError("date_of_birth", dict.errors.date_of_birth, dateOfBirth);
    hasError = true;
  }

  if (!validEmail(email.value)) {
    setError("email", dict.errors.email, email);
    hasError = true;
  }

  if (!validPhone(phone.value)) {
    setError("phone", dict.errors.phone, phone);
    hasError = true;
  }

  if (!preferredLanguage.value) {
    setError("preferred_language", dict.errors.preferred_language, preferredLanguage);
    hasError = true;
  }

  if (!preferredClinic.value) {
    setError("preferred_clinic", dict.errors.preferred_clinic, preferredClinic);
    hasError = true;
  }

  const prefDateObj = parseDate(preferredDate.value);
  const minDate = addBusinessDays(new Date(), 1);
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  if (!prefDateObj || prefDateObj < new Date(formatDate(minDate) + "T00:00:00") || prefDateObj > new Date(formatDate(maxDate) + "T23:59:59")) {
    setError("preferred_date", dict.errors.preferred_date, preferredDate);
    hasError = true;
  }

  if (!preferredTime.value) {
    setError("preferred_time", dict.errors.preferred_time, preferredTime);
    hasError = true;
  }

  if (!serviceType.value) {
    setError("service_type", dict.errors.service_type, serviceType);
    hasError = true;
  }

  if (serviceType.value === "Paediatric Care" && dob && ageFromDOB(dob) >= 18) {
    setError("service_type", dict.errors.paediatric, serviceType);
    hasError = true;
  }

  const newPatientValue = selectedRadioValue("new_patient");
  if (!newPatientValue) {
    setError("new_patient", dict.errors.new_patient, form.querySelector("input[name='new_patient']"));
    hasError = true;
  }

  const hasInsuranceValue = selectedRadioValue("has_insurance");
  if (!hasInsuranceValue) {
    setError("has_insurance", dict.errors.has_insurance, form.querySelector("input[name='has_insurance']"));
    hasError = true;
  }

  if (hasInsuranceValue === "Yes") {
    if (!insuranceProvider.value.trim() || insuranceProvider.value.trim().length > 100) {
      setError("insurance_provider", dict.errors.insurance_provider, insuranceProvider);
      hasError = true;
    }
    if (!/^[A-Za-z0-9]{6,20}$/.test(insuranceMemberId.value.trim())) {
      setError("insurance_member_id", dict.errors.insurance_member_id, insuranceMemberId);
      hasError = true;
    }
  }

  if (newPatientValue === "No" && patientId.value.trim() && !/^HC-[A-Za-z0-9]{6}$/.test(patientId.value.trim())) {
    setError("patient_id", dict.errors.patient_id, patientId);
    hasError = true;
  }

  const concernLength = healthConcern.value.trim().length;
  if (concernLength < 20) {
    const missing = 20 - concernLength;
    setError("health_concern", dict.errors.health_concern.replace("{missing}", String(missing)), healthConcern);
    hasError = true;
  }

  if (!contactConsent.checked) {
    setError("contact_consent", dict.errors.contact_consent, contactConsent);
    hasError = true;
  }

  if (hasError) {
    return;
  }

  successMessage.textContent = dict.success;
  form.reset();
  toggleConditionalFields();
  updateHealthCounter();
  warningTimeClinic.textContent = "";
  setDateBounds();
});

const params = new URLSearchParams(window.location.search);
const initialLang = normalizeLang(localStorage.getItem("lang") || params.get("lang") || "es");
const initialTheme = localStorage.getItem("theme") === "dark"
  ? "dark"
  : localStorage.getItem("theme") === "light"
    ? "light"
    : params.get("theme") === "dark"
      ? "dark"
      : params.get("theme") === "light"
        ? "light"
        : document.documentElement.classList.contains("dark")
          ? "dark"
          : "light";
setTheme(initialTheme);
setLanguage(initialLang);
setDateBounds();
toggleConditionalFields();
updateHealthCounter();
