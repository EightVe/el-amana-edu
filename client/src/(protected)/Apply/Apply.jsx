import React, { useState, useContext, useEffect } from 'react';
import { LoadingSpinner } from '@/lib/LoadingSpinner';
import { AuthContext } from '@/contexts/AuthContext';
import toast from 'react-hot-toast';
import axiosInstance from '@/lib/axiosInstance'; // Make sure to adjust the path to where you store your axios instance
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { CheckCircle, CircleCheckBig } from 'lucide-react';
import { uploadImageToFirebase } from '@/lib/firebaseUtils'; // Make sure to adjust the path to where you store your Firebase utils
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import HomeNavigation from '@/components/general/HomeNavigation';
import { useTranslation } from 'react-i18next';

const Apply = () => {
    const { user, loading } = useContext(AuthContext);
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const router = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        fatherName: '',
        motherName: '',
        nation: '',
        secondNation: '',
        country: '',
        passportNo: '',
        secondPassportNo: '',
        phoneNumber: '',
        secondPhoneNumber: '',
        email: user.emailAddress,
        university: '',
        department: '',
        gender: 'Male', // Default selected value
        departmentLanguage: 'Turkish', // Default selected value
        studentPicture: null,
        certificatePicture: null,
        passportPicture: null,
        secondPassportPicture: null,
        transcriptPicture: null,
        extraOne: null,
        extraTwo: null,
        extraThree: null,
        extraFour: null,
        extraFive: null,
        extraSix: null
    });

    const [submitting, setSubmitting] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({});
    const [uploadSuccess, setUploadSuccess] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        validateField(id, value);
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, [field]: file });
            validateField(field, file);
            uploadFileToFirebase(file, field);
        }
    };

    const handleSelectChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        validateField(field, value);
    };

    const uploadFileToFirebase = (file, field) => {
        setUploadProgress({ ...uploadProgress, [field]: 'loading' });
        uploadImageToFirebase(file, (progress) => {
            setUploadProgress({ ...uploadProgress, [field]: progress });
        })
            .then((url) => {
                setFormData({ ...formData, [field]: url });
                setUploadProgress({ ...uploadProgress, [field]: 'success' });
                setUploadSuccess({ ...uploadSuccess, [field]: true });
                toast.success(`${field} uploaded successfully!`);
            })
            .catch((error) => {
                setUploadProgress({ ...uploadProgress, [field]: 'error' });
                toast.error(`Failed to upload ${field}.`);
            });
    };

    const validateField = (id, value) => {
        const element = document.getElementById(id);
        if (element) {
            if (value) {
                element.classList.remove('border-red-500');
            } else {
                element.classList.add('border-red-500');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = [
            'fullName', 'fatherName', 'motherName', 'nation', 'country', 'passportNo', 'phoneNumber', 'university', 'department', 'gender', 'departmentLanguage', 'studentPicture', 'certificatePicture', 'passportPicture', 'transcriptPicture'
        ];

        const emptyFields = requiredFields.filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach(field => {
                const element = document.getElementById(field);
                if (element) {
                    element.classList.add('border-red-500');
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });

            toast.error('Please fill out all required fields.');
            return;
        }

        setSubmitting(true);

        try {
            await axiosInstance.post('/application/send', formData);
            toast.success('Application sent successfully!');
            setIsOpen(true);
            setTimeout(() => {
                router('/application-status');
            }, 2000);
        } catch (error) {
            toast.error('Failed to send application.');
        } finally {
            setSubmitting(false);
        }
    };

    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true });

    return (
      <>
      <div className='bg-[#aaaa9b]'>
      <HomeNavigation />
        <div className={`mx-auto max-w-4xl space-y-8 pt-10 px-2 ${isArabic ? 'arabic-font' : 'paragfont'}`}>
            <div ref={containerRef} className="space-y-2 text-center h-[70vh] flex items-center justify-center flex-col">
                <motion.h1
                    className="text-5xl font-bold uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {t('applynowtitlemax')}
                </motion.h1>
                <motion.p
                    className=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {t('applynowparagdown')}
                </motion.p>
            </div>
            <Card className="bg-transparent border-0">
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <CardTitle>1. {t('applytitle')}</CardTitle>
                            <CardDescription>{t('applypragraph')}</CardDescription>
                        </motion.div>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <div className="space-y-2">
                                <Label htmlFor="fullName" className="flex items-center gap-1">{t('firstnameapply')} <span className='text-red-400'>*</span></Label>
                                <Input id="fullName" value={formData.fullName} onChange={handleInputChange} disabled={submitting} className="bg-[#f3f3f3]"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="fatherName" className="flex items-center gap-1">{t('fathernameapply')} <span className='text-red-400'>*</span></Label>
                                <Input id="fatherName" value={formData.fatherName} onChange={handleInputChange} disabled={submitting}  className="bg-[#f3f3f3]"/>
                            </div>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <div className="space-y-2">
                                <Label htmlFor="motherName" className="flex items-center gap-1">{t('mothernameapply')} <span className='text-red-400'>*</span></Label>
                                <Input id="motherName" value={formData.motherName} onChange={handleInputChange} disabled={submitting}  className="bg-[#f3f3f3]"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="nation" className="flex items-center gap-1">{t('nationapply')} <span className='text-red-400'>*</span></Label>
                                <Input id="nation" value={formData.nation} onChange={handleInputChange} disabled={submitting}  className="bg-[#f3f3f3]"/>
                            </div>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            <div className="space-y-2">
                                <Label htmlFor="secondNation" className="flex items-center gap-1">{t('secondnationaapply')}</Label>
                                <Input id="secondNation" value={formData.secondNation} onChange={handleInputChange} disabled={submitting}  className="bg-[#f3f3f3] "/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="country" className="flex items-center gap-1">{t('contryapply')} <span className='text-red-400'>*</span></Label>
                                <Input id="country" value={formData.country} onChange={handleInputChange} disabled={submitting}  className="bg-[#f3f3f3] "/>
                            </div>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                        >
                            <div className="space-y-2">
                                <Label htmlFor="passportNo">{t('passnoapply')} <span className='text-red-400'>*</span></Label>
                                <Input id="passportNo" value={formData.passportNo} onChange={handleInputChange} disabled={submitting}  className="bg-[#f3f3f3]"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="secondPassportNo">{t('secondpassnoapply')}</Label>
                                <Input id="secondPassportNo" value={formData.secondPassportNo} onChange={handleInputChange} disabled={submitting}  className="bg-[#f3f3f3]"/>
                            </div>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 2 }}
                        >
                            <div className="space-y-2">
                                <Label htmlFor="phoneNumber">{t('phonenoapply')} <span className='text-red-400'>*</span></Label>
                                <Input id="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} disabled={submitting}  className="bg-[#f3f3f3] "/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="secondPhoneNumber">{t('secondphonenoapply')}</Label>
                                <Input id="secondPhoneNumber" value={formData.secondPhoneNumber} onChange={handleInputChange} disabled={submitting}  className="bg-[#f3f3f3] "/>
                            </div>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-1 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 2.2 }}
                        >
                            <div className="space-y-2">
                                <Label htmlFor="email">{t('emailapply')}</Label>
                                <Input id="email" value={formData.email} disabled  className="bg-[#f3f3f3] "/>
                            </div>
                        </motion.div>
                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 2.4 }}
                        >
                            <Label>{t('genderapply')} <span className='text-red-400'>*</span></Label>
                            <div onClick={() => !submitting && handleSelectChange('gender', 'Male')} className={`flex justify-between items-center p-3 rounded-md cursor-pointer  ${formData.gender === 'Male' ? 'bg-green-200' : 'bg-[#f3f3f3]'}`}>
                                <Label>{t('gendermale')}</Label> {formData.gender === 'Male' && <CheckCircle className='h-5 w-5 text-green-500' />}
                            </div>
                            <div onClick={() => !submitting && handleSelectChange('gender', 'Female')} className={`flex justify-between items-center p-3 rounded-md cursor-pointer  ${formData.gender === 'Female' ? 'bg-green-200' : 'bg-[#f3f3f3]'}`}>
                                <Label>{t('genderfemale')}</Label> {formData.gender === 'Female' && <CheckCircle className='h-5 w-5 text-green-500' />}
                            </div>
                        </motion.div>
                    </CardContent>
                    <CardHeader>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 2.6 }}
                        >
                            <CardTitle>2. {t('uninfotitle')}</CardTitle>
                        </motion.div>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 2.8 }}
                        >
                            <Label htmlFor="university" >{t('uniapplychoose')} <span className='text-red-400'>*</span></Label>
                            <Select id="university" value={formData.university} onValueChange={(value) => handleSelectChange('university', value)} disabled={submitting} className="bg-[#f3f3f3] ">
                                <SelectTrigger className="bg-[#f3f3f3]">
                                    <SelectValue placeholder="" defaultValue="Nisantasi University"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Nisantasi University">Nisantasi University</SelectItem>
                                    <SelectItem value="Atlas University">Atlas University</SelectItem>
                                    <SelectItem value="Medipol University">Medipol University</SelectItem>

                                    <SelectItem value="Gelisim University">Gelisim University</SelectItem>
                                    <SelectItem value="Biruni University">Biruni University</SelectItem>
                                    <SelectItem value="Istinye University">Istinye University</SelectItem>

                                    <SelectItem value="Bahcesehir University">Bahcesehir University</SelectItem>
                                    <SelectItem value="Isik University">Isik University</SelectItem>
                                    <SelectItem value="Altinbas University">Altinbas University</SelectItem>

                                    <SelectItem value="Fenerbahce University">Fenerbahce University</SelectItem>
                                    <SelectItem value="Okan University">Okan University</SelectItem>
                                    <SelectItem value="Istanbul Kent University">Istanbul Kent University</SelectItem>

                                    <SelectItem value="Beykent University">Beykent University</SelectItem>
                                    <SelectItem value="Beykoz University">Beykoz University</SelectItem>

                                </SelectContent>
                            </Select>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-1 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 3 }}
                        >
                            <div className="space-y-2">
                                <Label htmlFor="department">{t('departchooseapply')} <span className='text-red-400'>*</span></Label>
                                <Input id="department" value={formData.department} onChange={handleInputChange} disabled={submitting} className="bg-[#f3f3f3]"/>
                            </div>
                        </motion.div>
                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 3.2 }}
                        >
                            <Label>{t('deplangapply')} <span className='text-red-400'>*</span></Label>
                            <div onClick={() => !submitting && handleSelectChange('departmentLanguage', 'Turkish')} className={`flex justify-between items-center  p-3 rounded-md cursor-pointer ${formData.departmentLanguage === 'Turkish' ? 'bg-green-200' : 'bg-[#f3f3f3]'}`}>
                                <Label>{t('deplangturkish')}</Label> {formData.departmentLanguage === 'Turkish' && <CheckCircle className='h-5 w-5 text-green-500' />}
                            </div>
                            <div onClick={() => !submitting && handleSelectChange('departmentLanguage', 'English')} className={`flex justify-between items-center  p-3 rounded-md cursor-pointer ${formData.departmentLanguage === 'English' ? 'bg-green-200' : 'bg-[#f3f3f3]'}`}>
                                <Label>{t('deplangenglish')}</Label> {formData.departmentLanguage === 'English' && <CheckCircle className='h-5 w-5 text-green-500' />}
                            </div>
                        </motion.div>
                    </CardContent>

                    <CardHeader>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 3.4 }}
                        >
                            <CardTitle>3. {t('imguploadtitle')} <span className='text-red-400'>*</span></CardTitle>
                        </motion.div>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        {['studentPicture', 'certificatePicture', 'passportPicture', 'secondPassportPicture', 'transcriptPicture', 'extraOne', 'extraTwo', 'extraThree', 'extraFour', 'extraFive', 'extraSix'].map((field, index) => (
                            <motion.div
                                key={index}
                                className="grid gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isInView ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 3.6 + (index * 0.2) }}
                            >
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor={`${field}-file`} id={field} className={`flex flex-col items-center justify-center w-full h-64 border-2 ${uploadSuccess[field] ? 'border-green-300' : 'border-[#f3f3f3]'} border-dashed rounded-lg cursor-pointer hover:bg-gray-50/30`}>
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            {uploadProgress[field] === 'loading' ? (
                                                <LoadingSpinner />
                                            ) : uploadSuccess[field] ? (
                                                <CircleCheckBig className='h-14 w-14 text-green-500/80' />
                                            ) : (
                                                <>
                                                    <svg className="w-8 h-8 mb-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p className="mb-2 text-sm  text-black"><span className="font-semibold capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</span></p>
                                                    <p className="text-xs  text-black">PNG, JPG (MAX. 2MB)</p>
                                                </>
                                            )}
                                        </div>
                                        <input id={`${field}-file`} type="file" className="hidden" onChange={(e) => handleFileChange(e, field)} disabled={submitting || uploadProgress[field] === 'loading'} />
                                    </label>
                                </div>
                            </motion.div>
                        ))}
                    </CardContent>

                    <CardFooter className="justify-end flex items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 4 }}
                        >
                            <Button type="submit" disabled={submitting}>
                                {submitting && <LoadingSpinner className="h-4 w-4 mr-2" />}
                                {t('sendAppBtn')}
                            </Button>
                        </motion.div>
                    </CardFooter>
                </form>
            </Card>

        </div>
      </div>
      <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-screen w-full flex items-center justify-center fixed top-0 inset-0 bg-black/30 backdrop-blur-lg z-[9999999999]"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: "12.5deg" }}
                            animate={{ scale: 1, rotate: "0deg" }}
                            exit={{ scale: 0, rotate: "0deg" }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gradient-to-br from-[#aaaa9b] to-[#b9b9b9] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                        >
                            <div className="relative z-10">
                              <div className='w-full flex items-center justify-center'><CheckCircle className='text-green-200 h-10 w-10'/></div>
                                <h3 className="text-2xl font-semibold text-center mb-2">
                                    {t('emailsenttitleapply')}
                                </h3>
                                <p className="text-center mb-6 text-sm">
                                {t('emailsentparagraphapply')}
                                </p>
                             
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Apply;
