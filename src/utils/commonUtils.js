export const formatDateTime = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: "short" }).toLowerCase();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    return `${day} ${month},${year} ${formattedTime}`;
};

export const getTitle = (item, state) => {
    switch (item.title) {
        case "Search Bike Modal":
            return state.bikeModel || item.title;
        case "Start Date & time":
            return state.startdateTime || item.title;
        case "End Date & time":
            return state.enddateTime || item.title;
        case "PickDate":
            setState(prevState => ({ ...prevState, premiumDate: formatedResult }));
            break;
        case "PremiumStart":
            setState(prevState => ({ ...prevState, premiumStarttime: formatedResult }));
            break;
        case "PremiumEnd":
            setState(prevState => ({ ...prevState, premiumEndtime: formatedResult }));
            break;
        default:
            return item.title;
    }
};



