import { useState, useEffect } from 'react';
import './index.css'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [avatarUrl, setAvatarUrl] = useState();

    useEffect(() => {
        return () => {
            if (avatarUrl) {
                URL.revokeObjectURL(avatarUrl);
            }
        };
    }, [avatarUrl]);

    function handleAvatarChange(e) {
        const file = e.target.files[0];
        if (file) {
            setAvatarUrl(URL.createObjectURL(file));
        }
    }

    function removeImage() {
        setAvatarUrl(null)
    } 

    const handleSubmitForm = (data) => {
        console.log(data)
    }

    function validateImage(fileList) {
        const image = fileList[0];
        if (!image || image.type == "" || image.size == 0 || avatarUrl == null) return "Upload your photo (JPG or PNG, max size: 500KB).";
        if (image.size > 500 * 1024) return "File too large. Please upload a photo under 500KB";
        return true;
    }

    function isString(value) {
        if (typeof value !== 'string' || value.trim() === '') return 'Invalid';
        return true;
    }

    return (
        <form className="form" id="ticketForm" onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="upload-avatar">
                <p>Upload Avatar</p>
                <div className="upload-area">
                    <input
                        type="file"
                        id="avatar"
                        accept="image/png, image/jpeg"
                        {...register('avatar',
                            { validate: validateImage }
                        )} 
                        onChange={handleAvatarChange}/>
                    
                    <label htmlFor="avatar"> 
                        <img className={avatarUrl ? 'avatar-image' : null} src={avatarUrl} />  
                        <span>Drag and drop or click to upload</span>
                    </label>
                    <div className={avatarUrl ? 'avatar-buttons' : ''}>
                        <button type="button" onClick={removeImage}><span>Remove image</span></button>
                        <button type="button"> <label htmlFor="avatar"><span>Change image</span></label></button>
                    </div>
                </div>
                <div className="upload-info">
                    {errors.avatar ? <p className="error-text">{errors.avatar.message}</p> : <p>Upload your photo (JPG or PNG, max size: 500KB).</p>}
                </div>
            </div>

            <label htmlFor="fullName">Full Name</label>
            <input
                autoComplete="name"
                type="text"
                id="fullName"
                {...register('name', {
                    required: 'Please enter a valid name',
                    validate: isString
                })} />
            <div className={errors.name ? `error-text` : ``}>  {errors.name && <p>{errors.name.message}</p>}</div>

            <label htmlFor="email">Email Address</label>
            <input
                autoComplete="email"
                type="text"
                id="email"
                placeholder="example@email.com"
                {...register('email', {
                    required: 'Please enter a valid email Address',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email format',
                        validate: isString
                    }
                })}
            />
            <div className={errors.email ? `error-text` : ``}> {errors.email && <p>{errors.email.message}</p>}</div>

            <label htmlFor="githubUserName">GitHub Username</label>
            <input
                type="text"
                id="githubUserName"
                placeholder="@yourusername"
                {...register('githubUserName', {
                    required: 'Please enter a valid github username',
                    validate: isString
                })} />
            <div className={errors.githubUserName ? `error-text` : ``}> {errors.githubUserName && <p>{errors.githubUserName.message}</p>}</div>

            <button className="bnt" type="submit" >Generate My Ticket</button>
        </form>
    )
}

export default Form