type MonthDate = {
  year: number;
  month: number;
};

type ExperiencePeriod = {
  company: string;
  startMonth: string;
  endMonth?: string;
};

const MONTHS_IN_YEAR = 12;

export const BIRTH_DATE = "2003-06-02";

export const ENTERPRISE_EXPERIENCE_PERIODS: ExperiencePeriod[] = [
  {
    company: "ATRA limited company",
    startMonth: "2021-01",
    endMonth: "2022-08",
  },
  {
    company: "Axess",
    startMonth: "2023-08",
  },
] as const;

function parseMonthDate(value: string): MonthDate {
  const [year, month] = value.split("-").map(Number);

  return { year, month };
}

function toMonthDate(date: Date): MonthDate {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  };
}

function getInclusiveMonthDifference(start: MonthDate, end: MonthDate): number {
  return (end.year - start.year) * MONTHS_IN_YEAR + end.month - start.month + 1;
}

export function getAge(asOf = new Date()): number {
  const birthDate = new Date(`${BIRTH_DATE}T00:00:00`);
  let age = asOf.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    asOf.getMonth() > birthDate.getMonth() ||
    (asOf.getMonth() === birthDate.getMonth() &&
      asOf.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return age;
}

export function getEnterpriseExperienceMonths(asOf = new Date()): number {
  const currentMonth = toMonthDate(asOf);

  return ENTERPRISE_EXPERIENCE_PERIODS.reduce((totalMonths, period) => {
    const startMonth = parseMonthDate(period.startMonth);
    const endMonth = parseMonthDate(
      period.endMonth ??
        `${currentMonth.year}-${String(currentMonth.month).padStart(2, "0")}`,
    );

    return totalMonths + getInclusiveMonthDifference(startMonth, endMonth);
  }, 0);
}

export function formatDuration(months: number, compact = false): string {
  const years = Math.floor(months / MONTHS_IN_YEAR);
  const remainingMonths = months % MONTHS_IN_YEAR;
  const yearLabel = `${years} ${years === 1 ? "year" : "years"}`;

  if (remainingMonths === 0) {
    return yearLabel;
  }

  const monthLabel = `${remainingMonths} ${
    remainingMonths === 1 ? "month" : "months"
  }`;

  return compact ? `${yearLabel} ${monthLabel}` : `${yearLabel} and ${monthLabel}`;
}

export function getEnterpriseExperienceLabel(
  asOf = new Date(),
  compact = false,
): string {
  return formatDuration(getEnterpriseExperienceMonths(asOf), compact);
}

export function getEnterpriseExperienceBreakdown(asOf = new Date()) {
  const currentMonth = toMonthDate(asOf);

  return ENTERPRISE_EXPERIENCE_PERIODS.map((period) => {
    const startMonth = parseMonthDate(period.startMonth);
    const endMonth = parseMonthDate(
      period.endMonth ??
        `${currentMonth.year}-${String(currentMonth.month).padStart(2, "0")}`,
    );
    const months = getInclusiveMonthDifference(startMonth, endMonth);

    return {
      company: period.company,
      months,
      label: formatDuration(months),
      monthLabel: `${months} ${months === 1 ? "month" : "months"}`,
    };
  });
}
