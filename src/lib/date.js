function parseIsoDateToSortableNumber(dateString) {
    if (typeof dateString !== "string") return Number.NEGATIVE_INFINITY;

    const match = dateString.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return Number.NEGATIVE_INFINITY;

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);

    return year * 10000 + month * 100 + day;
}

export function compareIsoDateDesc(dateA, dateB) {
    return parseIsoDateToSortableNumber(dateB) - parseIsoDateToSortableNumber(dateA);
}

export function formatIsoDateToPtBr(dateString) {
    if (typeof dateString !== "string") return "";

    const match = dateString.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return "";

    const year = match[1];
    const month = match[2];
    const day = match[3];

    return `${day}/${month}/${year}`;
}