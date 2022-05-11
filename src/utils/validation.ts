/* eslint-disable @typescript-eslint/ban-ts-comment */
export const getFieldValidation = (field: string, validator: any) => {
    const validations = {} as any;
    const patterns = {
        email: /^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
    };
    // @ts-ignore
    const errorMessages = validator.config.errMessages[field];
    // @ts-ignore
    const validation = validator.schema.properties[field] || {};
    if(validation?.format) {
        validations.pattern = {
            // @ts-ignore
            value: patterns[validation?.format],
            message: errorMessages.format,
        }
    }

    Object.keys(validation).forEach((key) => {
        const value = validation[key];
        if(key === 'oneOf') {
            validations.validate = (value: string) => validation.oneOf.map((v: any) => v.toString()).includes(value.toString());
        } else {
            if(typeof value === 'object') {
                // @ts-ignore
                validations[key] = {
                    ...value,
                    message: errorMessages[key],
                }
            } else {
                // @ts-ignore
                validations[key] = errorMessages[key];
            }
        }
    })
    return validations;
}