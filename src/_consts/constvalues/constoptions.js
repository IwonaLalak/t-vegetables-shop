export const perOptions = () => {
    return [
        {value: 'kg', label: 'per kg'},
        {value: 'stuck', label: 'per stuck'},
    ]
};

export const confirmedDataStatuses = (status) => {
    let arr = [
        {status: -1, label: 'Please confirm data'},
        {status: 0, label: 'Data changed, please confirm'},
        {status: 1, label: 'Data confirmed'},
    ];

    return arr.find(s => s.status === status);
};