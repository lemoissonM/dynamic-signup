/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Button, Grid, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import BreadCrumb from "../../ui/Breadcrumb";
import CheckBoxBase from "../../ui/CheckBox";
import TextInput from "../../ui/Input";
import SelectInput from "../../ui/Select";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { getFieldValidation } from "../../utils/validation";
import { ISignup } from "../../config/Iconfig";

type PropTypes = {
    configFileName?: string;
}

const SignUp: React.FC<PropTypes> = ({ configFileName = 'signup' }) => {
    const [currentSection, setSection] = useState(0);
    const [finalData, setFinalData] = useState([] as any[]);
    const [signupConfig, setConfig] = useState({} as ISignup);
    const showBreadcrumb = signupConfig?.sections?.length > 1;
    const [globalError, setGlobalError] = useState(null as any);

    useEffect(() => {
        const loadConfig = async () => {
            try {
            const jsonConfig = await (import(`../../config/${configFileName || 'signuph'}.json`));
            setConfig(jsonConfig);
            setGlobalError('');
            } catch (error) {
                setGlobalError('Could not load config file, please check your config file name');
            }
        }
        loadConfig();
    }, [configFileName]);

    const { t } = useTranslation();
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm()

    const onSubmit = (values: any) => {
        if(!finalData[currentSection]) finalData.push(values);
        else finalData[currentSection] = {...finalData[currentSection], ...values};
        setFinalData(finalData);
        if(currentSection < signupConfig.sections.length - 1) {
            setSection(1 + currentSection);
        }
    }
    const onBack = () => {
        setSection(currentSection - 1);
    }



    return (
        <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
            <ColorModeSwitcher justifySelf="flex-end" />
            <Box justifySelf="center" alignSelf="center" borderRadius={15} boxShadow="lg" width="450px">
                <Stack spacing={3} padding="12">
                    {showBreadcrumb && <BreadCrumb items={signupConfig.sections} activeIndex={currentSection} />}

                    <Text fontSize="xl" fontWeight="bold">Signup</Text>

                    {globalError && <Text color="red.500">{globalError}</Text>}

                    {signupConfig.sections?.map((section, index) => {
                        return (
                            <form key={`section-${index}`} hidden={currentSection !== index} onSubmit={handleSubmit(onSubmit)}>

                            {section?.fields?.map((field, index) => {
                                if (typeof field.component === 'string' && field.component?.includes('Input')) {
                                    return <TextInput key={`${field.name}-${index}`} defaultValue={finalData[currentSection]?.[field.name]} validation={getFieldValidation(field.name, signupConfig.validation)} isPassword={field.component === 'PasswordInput'} label={field.label || ''} placeholder={field.label || ''} type={field.type || ''} id={field.name} register={register} error={errors[field.name]} disabled={false} />
                                } else if (typeof field.component !== 'string' && field?.component?.name === 'CheckboxBase') {
                                    return <CheckBoxBase key={`${field.name}-${index}`} defaultChecked={finalData[currentSection]?.[field.name]} validations={getFieldValidation(field.name, signupConfig.validation)} {...field?.component?.props} name={field?.name} error={errors[field.name]}  register={register} />
                                } else if (typeof field.component !== 'string' && field?.component?.name === 'Select') {
                                    {/*@ts-ignore*/}
                                    return <SelectInput key={`${field.name}-${index}`} defaultSelected={finalData[currentSection]?.[field.name]} label={field?.component?.props.label} placeholder={field?.component?.props.label} options={field?.component?.props?.options} />
                                }
                            })}

                            <Box display="flex" flexDirection={"row"} justifyContent="space-between" w="full" mt={10}>
                                {currentSection !== 0 ? (
                                    <Button
                                        width="40%"
                                        colorScheme='teal'
                                        type={'submit'}
                                        onClick={onBack}
                                    >
                                        {t('back')}
                                    </Button>
                                ): null}
                                <Button
                                    width={currentSection === 0 ? "100%" : "40%"}
                                    colorScheme='teal'
                                    isFullWidth={currentSection === 0}
                                    type={'submit'}
                                >
                                    {t(signupConfig.sections[currentSection].submitButtonLabel)}
                                </Button>
                            </Box>
                            </form>
                        )
                    })}
                    
                </Stack>
            </Box>
        </Grid>
        </Box>
    )
}

export default SignUp;