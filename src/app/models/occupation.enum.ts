export enum Occupation {
    CLEANER = "Cleaner",
    DOCTOR = "Doctor",
    AUTHOR = "Author",
    FARMER = "Farmer",
    MECHANIC = "Mechanic",
    FLORIST = "Florist",
}

export const OccupationList: string[] = Object.entries(Occupation).map(([key, value]) => {
    return value;
})