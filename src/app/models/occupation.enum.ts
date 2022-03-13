export enum Occupation {
    Cleaner = 1,
    Doctor = 2,
    Author = 3,
    Farmer = 4,
    Mechanic = 5,
    Florist = 6,
}

export const OccupationList: any[] = Object.entries(Occupation).filter(e => isNaN(e[0] as any)).map(([key, value]) => {
    return {
        id: value,
        text: key
    };
})