export default function sitemap(){
    const host = "https://vgapp.com.br";
    return [
        {
            url: host,
            lastModified: new Date(),
            priority: 1.0,
            changeFrequency: "monthly",
            images: [`${host}/static/images/vgapp-logo-bg.png`]
        },
        {
            url: `${host}/tcheu-busu`,
            lastModified: new Date(),
            priority: 0.8,
            changeFrequency: "monthly",
            images: [`${host}/static/images/app-tamplate.png`]
        }
    ]
}