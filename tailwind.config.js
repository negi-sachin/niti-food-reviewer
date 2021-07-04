module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            backgroundImage: () => ({
                'login-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
                'landing-background':
                    'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://ucce2425456383625bdf47e7ff28.previews.dropboxusercontent.com/p/thumb/ABNROEdeaEdYgrb7NjJO6eWFHbix6TcykxshvGgGq1dLVAIWrGSWmTMWjTf1TslJQnY05cS32hbgWtKlIxwxhmON5vN_g0Td23EHE22dF4KAblbpAmbolPiCZhFqFYgxMDaiVU3o7ILthAmMkIMNPV_Vc96fg-ZSbn6EPG87TlYMnZMPBHuqieSPO5HFxFeoZZQKINHYNzGl2jYNK671nE_08_gylnbxJgXiPQOtKzhi-a_zhEHPu9T7FXCGb9Kf8XESNE1qtGag950DxV95T0NTVEWrwx-HojXCSBsqup75JZjeWilyqPAChTLPGI7UBB-fJG1-UrHG5CwiMcnvJIu6wWMlPub38kRq88wGKH7c9VpL0-nZF1qCRtBkoDLa1HWC7-EClOud31HZhay1_wqV/p.jpeg?fv_content=true&size_mode=5)',
                'profile-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
