module.exports = {
    // Uncomment the line below to enable basePath, pages and
    // redirects will then have a path prefix (`/app` in this case)
    //
    // basePath: '/app',

    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/404': { page: '/404' },
            '/403': { page: '/403' },
            '/thank-you': { page: '/thank-you' },
            '/forms/index': { page: '/forms' },
            '/forms/book-now': { page: '/forms/book-now' },
            '/forms/consent': { page: '/forms/consent' },
            '/forms/food-intolerance': { page: '/forms/food-intolerance' },
            '/forms/functional-exam': { page: '/forms/functional-exam' },
            '/forms/follow-up': { page: '/forms/follow-up' },
            '/forms/herbal-v-steam-intake': { page: '/forms/herbal-v-steam-intake' },
            '/forms/endocrine-steam-intake': { page: '/forms/endocrine-steam-intake' },
            '/forms/covid-19': { page: '/forms/covid-19' },
            '/forms/pediatric-assessment-questionnaire': { page: '/forms/pediatric-assessment-questionnaire' },
            '/policies/privacy-policy': { page: '/policies/privacy-policy' },
            '/policies/cookie-policy': { page: '/policies/cookie-policy' },
            '/policies/cancellation-rescheduling-policy': { page: '/policies/cancellation-rescheduling-policy' },
            '/services/index': { page: '/services' },
            '/about/index': { page: '/about' },
            '/about/the-j-and-j-team': { page: '/about/the-j-and-j-team' },
            '/about/why-choose-j-and-j': { page: '/about/why-choose-j-and-j'},
            '/about/testimonials': { page: '/about/testimonials' },
            '/gallery/index': { page: '/gallery' },
            '/kids/index': { page: '/kids' },
            '/kids/about/index': { page: '/kids/about' },
            '/kids/about/the-j-and-j-team': { page: '/kids/about/the-j-and-j-team' },
            '/kids/about/why-choose-j-and-j': { page: '/kids/about/why-choose-j-and-j' },
            '/kids/about/testimonials': { page: '/kids/about/testimonials' },
            '/kids/gallery/index': { page: '/kids/gallery' },
            '/conditions/index': { page: '/conditions' },
            '/conditions/cardiovascular': { page: '/conditions/cardiovascular' },
            '/conditions/digestive-system': { page: '/conditions/digestive-system' },
            '/conditions/immune-system': { page: '/conditions/immune-system' },
            '/conditions/stress-and-adrenal-function': { page: '/conditions/stress-and-adrenal-function' },
            '/conditions/womens-health': { page: '/conditions/womens-health' },
            '/blog/index': { page: '/blog' }
        };
    },

    async redirects() {
        return [
            {
                source: '/the-j-and-j-team',
                destination: '/about/the-j-and-j-team',
                permanent: true,
            },
            {
                source: '/thejandjteam',
                destination: '/about/the-j-and-j-team',
                permanent: true,
            },
            {
                source: '/why-choose-j-and-j',
                destination: '/about/why-choose-j-and-j',
                permanent: true,
            },
            {
                source: '/whychoosejandj',
                destination: '/about/why-choose-j-and-j',
                permanent: true,
            }, {
                source: '/cardiovascular',
                destination: '/conditions/cardiovascular',
                permanent: true,
            },
            {
                source: '/immune-system',
                destination: '/conditions/immune-system',
                permanent: true,
            },
            {
                source: '/immunesystem',
                destination: '/conditions/immune-system',
                permanent: true,
            },
            {
                source: '/digestive-system',
                destination: '/conditions/digestive-system',
                permanent: true,
            },{
                source: '/digestive-system-issues',
                destination: '/conditions/digestive-system',
                permanent: true,
            },{
                source: '/digestive-issues',
                destination: '/conditions/digestive-system',
                permanent: true,
            },
            {
                source: '/stress-and-adrenal-function',
                destination: '/conditions/stress-and-adrenal-function',
                permanent: true,
            },
            {
                source: '/stressandadrenalfunction',
                destination: '/conditions/stress-and-adrenal-function',
                permanent: true,
            },
            {
                source: '/womens-health-issues',
                destination: '/conditions/womens-health',
                permanent: true,
            },
            {
                source: '/womenshealthissues',
                destination: '/conditions/womens-health',
                permanent: true
            },
            {
                source: '/conditions/womens-health-issues',
                destination: '/conditions/womens-health',
                permanent: true,
            },
            {
                source: '/blog/posts',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/contactus',
                destination: '/forms',
                permanent: true,
            },
            {
                source: '/contact',
                destination: '/forms',
                permanent: true,
            },
            {
                source: '/booknow',
                destination: '/forms/book-now',
                permanent: true,
            },
            {
                source: '/book-now',
                destination: '/forms/book-now',
                permanent: true,
            },
            {
                source: '/forms/success',
                destination: '/thank-you',
                permanent: true,
            },
            {
                source: '/consent',
                destination: '/forms/consent',
                permanent: true,
            },
            {
                source: '/functional-exam',
                destination: '/forms/functional-exam',
                permanent: true,
            },
            {
                source: '/food-intolerance',
                destination: '/forms/food-intolerance',
                permanent: true,
            },
            {
                source: '/pediatric-assessment-questionnaire',
                destination: '/forms/pediatric-assessment-questionnaire',
                permanent: true,
            },
            {
                source: '/pediatric-assessment-questionaire',
                destination: '/forms/pediatric-assessment-questionnaire',
                permanent: true,
            },
            {
                source: '/forms/pediatric-assessment-questionaire',
                destination: '/forms/pediatric-assessment-questionnaire',
                permanent: true,
            },
            {
                source: '/covid-19',
                destination: '/forms/covid-19',
                permanent: true,
            },
            {
                source: '/thanksgiving-raffle-registration',
                destination: '/forms/thanksgiving-raffle-registration',
                permanent: true,
            },
            {
                source: '/thanksgiving',
                destination: '/forms/thanksgiving-raffle-registration',
                permanent: true,
            },
            {
                source: '/thanksgiving-raffle',
                destination: '/forms/thanksgiving-raffle-registration',
                permanent: true,
            },
            {
                source: '/christmas-raffle-registration',
                destination: '/forms/christmas-raffle-registration',
                permanent: true,
            },
            {
                source: '/christmas',
                destination: '/forms/christmas-raffle-registration',
                permanent: true,
            },
            {
                source: '/christmas-raffle',
                destination: '/forms/christmas-raffle-registration',
                permanent: true,
            },
            {
                source: '/privacypolicy',
                destination: '/policies/privacy-policy',
                permanent: true,
            },
            {
                source: '/privacy-policy',
                destination: '/policies/privacy-policy',
                permanent: true,
            },
            {
                source: '/cookiepolicy',
                destination: '/policies/cookie-policy',
                permanent: true,
            },
            {
                source: '/cookie-policy',
                destination: '/policies/cookie-policy',
                permanent: true,
            },
            {
                source: '/cancellation-rescheduling-policy',
                destination: '/policies/cancellation-rescheduling-policy',
                permanent: true,
            },
            {
                source: '/back-to-school',
                destination: '/promos/back-to-school',
                permanent: true,
            },
            {
                source: '/covid-cocktail',
                destination: '/promos/kovid-kocktail',
                permanent: true,
            },
            
            {
                source: '/promos/covid-cocktail',
                destination: '/promos/kovid-kocktail',
                permanent: true,
            },
            {
                source: '/kovid-kocktail',
                destination: '/promos/kovid-kocktail',
                permanent: true,
            }
        ]
    },
}