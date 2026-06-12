import {
  getAge,
  getEnterpriseExperienceBreakdown,
  getEnterpriseExperienceLabel,
} from "../data/profile";

const ageElements = document.querySelectorAll("[data-profile-age]");
const experienceElements = document.querySelectorAll("[data-enterprise-experience]");
const experiencePeriodElements = document.querySelectorAll("[data-enterprise-period]");
const experienceBreakdown = getEnterpriseExperienceBreakdown();

ageElements.forEach((element) => {
  element.textContent = String(getAge());
});

experienceElements.forEach((element) => {
  const compact = element.getAttribute("data-format") === "compact";

  element.textContent = getEnterpriseExperienceLabel(new Date(), compact);
});

experiencePeriodElements.forEach((element) => {
  const periodIndex = Number(element.getAttribute("data-enterprise-period"));
  const period = experienceBreakdown[periodIndex];

  if (!period) {
    return;
  }

  element.textContent = `${period.company}: ${period.label}`;
});
