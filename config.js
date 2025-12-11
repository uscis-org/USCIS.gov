// CONFIGURACIÓN DE DOMINIOS - MODIFICA AQUÍ
const USCIS_CONFIG = {
    // DOMINIOS PRINCIPALES
    domains: {
        production: "https://www.uscis.gov",
        caseStatus: "https://egov.uscis.gov",
        myAccount: "https://myaccount.uscis.gov",
        tools: "https://www.uscis.gov/tools"
    },
    
    // ENDPOINTS DE API
    endpoints: {
        caseStatus: "/casestatus/mycasestatus.do",
        processingTimes: "/processing-times/",
        forms: "/forms/allforms/",
        offices: "/about-us/find-uscis-office/field-offices"
    },
    
    // CONFIGURACIÓN DEL SITIO
    site: {
        name: "U.S. Citizenship and Immigration Services",
        shortName: "USCIS",
        version: "3.5.2",
        lastUpdated: "2024-01-15"
    }
};

// Exportar configuración
window.USCIS_CONFIG = USCIS_CONFIG;