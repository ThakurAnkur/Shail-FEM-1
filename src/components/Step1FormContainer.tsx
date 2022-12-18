export const Step1FormContainer = () => {
    return (
        <div className='form-container'>
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>
            <form>
                <div className='form-control'>
                    <label>Name</label>
                    <input type="text" placeholder="e.g. Stephen King" />
                </div>
                <div className='form-control'>
                    <label>Email Address</label>
                    <input type="Email" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div className='form-control'>
                    <label>Phone Number</label>
                    <input type="Number" placeholder="e.g. +1 234 567 890" />
                </div>
                <div className='btn-wrapper'>
                    <button type='button'>Next Step</button>
                </div>
            </form>
        </div>
    );
};
