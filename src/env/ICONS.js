const ICONS = {
    House: {
        viewBox: "0 0 100 131.20125",
        path: ["M98.296,45.755l-17.569-17.57L65.399,12.856L54.473,1.931c-2.411-2.412-6.323-2.412-8.735,0L1.916,45.755  c-2.413,2.412-2.413,6.323,0,8.735h11.026v44.417c0,3.411,2.766,6.177,6.177,6.177h21.304V76.712c0-3.411,2.765-6.176,6.177-6.176  h7.014c3.412,0,6.177,2.765,6.177,6.176v28.371h21.305c3.41,0,6.177-2.766,6.177-6.177V54.49h11.025  C100.709,52.078,100.709,48.167,98.296,45.755z"],    
    },
    Car: {
        viewBox: "0 0 100 125",
        path: ["M99 38c0-3.3-2.7-6-6-6h-6.368l-5.249-14.247c-.761-2.064-3.074-4.369-5.142-5.121C76.241 12.633 69 10 50 10s-26.241 2.633-26.241 2.633c-2.068.752-4.381 3.056-5.142 5.121L13.368 32H7c-3.3 0-6 2.7-6 6s2.7 6 6 6h1.947l-1.564 4.247C6.622 50.311 6 53.8 6 56v26c0 4.4 3.6 8 8 8s8-3.6 8-8v-4h56v4c0 4.4 3.6 8 8 8s8-3.6 8-8V56c0-2.2-.622-5.689-1.383-7.753L91.053 44H93c3.3 0 6-2.7 6-6zM27 20h46l6 18H21l6-18zm-7 42c-3.313 0-6-2.688-6-6s2.687-6 6-6 6 2.688 6 6-2.687 6-6 6zm60 0a6 6 0 110-12 6 6 0 010 12z"]
    },
    Food: {
        viewBox: "0 0 95 118.75",
        path: ["M25.667 44.933V23.121h2.837v17.198a1.591 1.591 0 003.184 0V23.121h3.132v17.198a1.59 1.59 0 103.182 0V23.121h3.132v17.198c0 .879.712 1.591 1.593 1.591.879 0 1.592-.712 1.592-1.591V23.121h2.837v21.812c0 4.86-3.23 8.963-7.659 10.288v34.183c2.595.494 5.269.764 8.006.764 5.089 0 9.971-.898 14.5-2.541V68.143H50.69l-.04-2.33c-.054-3.214-.29-31.662 7.953-40.046 1.679-1.705 3.618-2.572 5.768-2.572a2.369 2.369 0 012.368 2.37v60C80.624 78.519 90.167 64.106 90.167 47.5c0-23.526-19.14-42.667-42.666-42.667-23.527 0-42.668 19.141-42.668 42.667 0 18.56 11.914 34.38 28.494 40.236V55.223c-4.431-1.327-7.66-5.43-7.66-10.29z"]
    },
    Utilities:{
        viewBox:"0 0 30 37.5",
        path: ["M6 9.3L3.9 5.8l1.4-1.4 3.5 2.1v1.4l3.6 3.6v.3L11.1 13 7.4 9.3H6zm15 8.5h-.8c-.7 0-1.3-.1-1.9-.2L16.2 20l4.7 5.3c1.1 1.2 3 1.3 4.1.1 1.2-1.2 1.1-3-.1-4.1L21 17.8zm3.4-3.8c1.6-1.6 2.1-4 1.5-6.1-.1-.4-.6-.5-.8-.2l-3.5 3.5-2.8-2.8 3.5-3.5c.3-.3.2-.7-.2-.8-2.1-.7-4.5-.2-6.1 1.5-1.8 1.8-2.2 4.6-1.2 6.8l-10 8.9c-1.2 1.1-1.3 3-.1 4.1 1.2 1.2 3 1.1 4.1-.1l8.9-10c2.2 1 4.9.6 6.7-1.3z"]
    },
    Clothing: {
        viewBox: "0 0 48 42",
        path: ["M47.7 10.31L38.01 1l-.75-.72a1.055 1.055 0 00-.7-.28H31a7.008 7.008 0 01-7 7 7.008 7.008 0 01-7-7h-5.56a1.055 1.055 0 00-.7.28L9.99 1 .3 10.31a1.002 1.002 0 000 1.43l6.11 5.97a1.002 1.002 0 001.4 0L12 14v27a1.003 1.003 0 001 1h22a1.003 1.003 0 001-1V14l4.19 3.71a1.002 1.002 0 001.4 0l6.11-5.97a1.002 1.002 0 000-1.43z"]
    },   
    HealthCare: {
        viewBox: "0 0 24 30",
        path: ["M19 6h-2.1c-.5-2.3-2.5-4-4.9-4-2.4 0-4.4 1.7-4.9 4H5C3.3 6 2 7.3 2 9v10c0 1.6 1.3 3 3 3h14c1.7 0 3-1.4 3-3V9c0-1.7-1.3-3-3-3zm-7-2c1.3 0 2.4.8 2.8 2H9.2c.4-1.2 1.5-2 2.8-2zm3 11h-2v2c0 .5-.5 1-1 1s-1-.5-1-1v-2H9c-.5 0-1-.5-1-1s.5-1 1-1h2v-2c0-.5.5-1 1-1s1 .5 1 1v2h2c.5 0 1 .5 1 1s-.5 1-1 1z"]
    },
    Insurance: {
        viewBox: "0 0 847 1058.75",
        path: ["M423 811c-226,-80 -374,-275 -394,-588 0,0 248,-26 394,-188 147,162 395,188 395,188 -21,313 -168,508 -395,588z"]
    },
    Household: {
        viewBox: "0 0 50 62.5",
        fillRule: "evenodd",
        path: ["M25 18.592c7.084 0 12.826 5.742 12.826 12.826 0 7.084-5.742 12.826-12.826 12.826-7.084 0-12.826-5.742-12.826-12.826 0-7.084 5.742-12.826 12.826-12.826m9.991 12.826c0-5.518-4.473-9.991-9.991-9.991-5.385 0-9.774 4.26-9.983 9.594 11.077-5.171 10.52 6.221 19.396 3.751a9.968 9.968 0 00.578-3.354zM16.841 4.135V6.99H5.274V4.135h11.567zM42.557 6.99V4.135h2.855V6.99h-2.855zm-4.195 0V4.135h2.855V6.99h-2.855zM2.076 9.981h45.848V1.145C32.28-.393 17.002-.37 2.076 1.145v8.836zM47.924 50V12.836H2.076V50h45.848z"],
        clipRule:"evenodd"
    },
    Personal:{
        viewBox:"0 0 128 160" ,
        path: ["M99,56.09a18.48,18.48,0,0,1-8.38-9.88A9.16,9.16,0,0,0,82.09,40H83V28H74V8h30V0H36V.75A11.25,11.25,0,0,0,47.25,12H54V28H45V40h.91a9.16,9.16,0,0,0-8.56,6.21A18.48,18.48,0,0,1,29,56.09a15.86,15.86,0,0,0-8.32,14.62L23.14,110a19,19,0,0,0,19,18H85.85a19,19,0,0,0,19-18l2.5-39.26A15.86,15.86,0,0,0,99,56.09Z"]
    },
    Debt: {
        viewBox: "0 0 100 100",
        path: ["M94.8 42.4c-.3-.6-.8-1-1.5-1.2l-12.2-4c-1.3-.4-2.6.3-3.1 1.5-.4 1.2.3 2.6 1.5 3l6.8 2.2-22 11.2c3.5-5.2 4.2-12 1.2-18-3.1-6.3-9.4-10-16-10-2.7 0-5.4.6-7.9 1.9-8.8 4.4-12.4 15.1-8 24 3 6 9 9.6 15.3 9.8l-9.4 4.8L22.2 59c-1-.4-1.7-.3-2.2 0l-2.2 1.1-11.5 5.8c-1.2.6-1.7 2-1.1 3.2.6 1.2 2 1.7 3.2 1.1.1-.1 12.6-6.4 12.6-6.4l17.3 8.8c.7.3 1.3.4 2.1 0l48-24.3s-2.2 6.6-2.2 6.8c-.4 1.3.3 2.7 1.5 3 1.2.4 2.7-.3 3-1.5.1-.3 4-12.4 4-12.4.4-.5.3-1.2.1-1.8zM56.1 54.3c.4.9.1 2-.9 2.5-1 .4-2 .1-2.4-.9l-.9-1.9c-2.6.6-5.5-.2-6.7-2.6-.4-.9-.1-2 .9-2.5.9-.4 2-.1 2.4.8.6 1.3 2.6.8 3.5.4.9-.5 2.5-1.8 1.9-3-.6-1.2-2.6-.7-3.5-.3-1.9.9-3.8 1.1-5.5.5-1.4-.4-2.4-1.3-2.9-2.5-1.1-2.3-.2-5.1 2.1-6.9l-.9-1.8c-.4-.9-.1-2 .8-2.5 1.1-.4 2 0 2.5.9l.9 1.8c1-.2 2-.3 3-.1 1.7.4 3 1.3 3.7 2.7.4.9.1 2-.9 2.5-.9.4-2 .1-2.4-.9-.6-1.2-2.7-.7-3.5-.3-1.6.7-2.3 2.2-1.9 2.9.6 1.2 2.7.7 3.5.3 2.9-1.5 7-1 8.5 2 1.1 2.3.2 5.1-2.1 6.9l.8 2z"]
    },
    Education: {
        viewBox: "0 0 100 125",
        path:[ "M50 59.3c-2.7 0-5.4-.4-8-1.1l-22.4-6.7v15.3c0 2.8 1.8 5.2 4.5 6l9.8 2.9c10.8 3.2 22.2 3.2 33 0l9.8-2.9c2.7-.8 4.5-3.2 4.5-6V51.3L58 58.2c-2.6.8-5.3 1.1-8 1.1z",
         "M95.5 34.5L56 22.8c-3.9-1.2-8.1-1.2-12.1 0L4.5 34.5c-2.7.8-2.7 4.7 0 5.5L44 51.7c3.9 1.2 8.1 1.2 12.1 0l33.8-10v8.9c-.7.4-1.2 1.1-1.2 1.9v2.4c0 .9.5 1.7 1.3 2l-2.1 4.9c-.3.7.1 1.4.9 1.5l2.2.2h1.3l2.2-.2c.7-.1 1.1-.8.9-1.5l-2.1-4.9c.8-.4 1.3-1.1 1.3-2v-2.4c0-.8-.5-1.5-1.2-1.9v-9.9l2.2-.7c2.6-.9 2.6-4.7-.1-5.5z"]
    },
    Savings: {
        viewBox: "0 0 128 160", 
        path: ["M99,56.09a18.48,18.48,0,0,1-8.38-9.88A9.16,9.16,0,0,0,82.09,40H83V28H74V8h30V0H36V.75A11.25,11.25,0,0,0,47.25,12H54V28H45V40h.91a9.16,9.16,0,0,0-8.56,6.21A18.48,18.48,0,0,1,29,56.09a15.86,15.86,0,0,0-8.32,14.62L23.14,110a19,19,0,0,0,19,18H85.85a19,19,0,0,0,19-18l2.5-39.26A15.86,15.86,0,0,0,99,56.09Z",
         "M104,14.55s-8,8-8,13.89a8,8,0,0,0,16,0C112,22.55,104,14.55,104,14.55Z"]
    },
    Gifts: {
        viewBox: "0 0 60 75",
        path: ["M31.03 10.41c.47-.853.858-1.553 1.243-2.257.989-1.814 2.031-3.62 3.677-4.908 2.659-2.077 5.601-2.811 8.823-1.38 1.897.842 2.925 2.13 3.49 4.039 1.157 3.907-1.509 7.349-4.499 9.171-.287.175-.941.614-1.219.802.037.081.456-.076.493.006h.9c3.675 0 7.35-.002 11.023 0 .897 0 .916.022.916.923l-.001 9.589c0 .921-.049.98-.967.981-7.155.003-14.312-.004-21.47.013-.68.003-.896-.221-.891-.907.03-3.291.002-6.584.029-9.875.005-.592-.189-.833-.766-.82-.5.011-1.003.003-1.504-.015-.479-.017-.679.174-.676.676.022 3.315.022 6.631.028 9.946.001.918-.051.973-.974.973-7.252.005-14.505.009-21.758.012-.98 0-1.011-.037-1.016-.997-.014-3.196-.028-6.393-.044-9.589-.005-.873.03-.91.935-.912 3.509-.003 7.014-.003 10.52-.007.227 0 .944.093 1.239-.086-.165-.128-.809-.386-.983-.5-1.642-1.074-3-2.369-3.75-4.258-1.473-3.706.792-7.099 2.19-8.233C18.295.952 20.842.683 23.477 1.715c3.055 1.195 5.28 3.361 6.637 6.371.318.695.564 1.422.916 2.324zm-2.222 4.467c.027-.223-1.924-5.027-3.168-6.994-.913-1.758-1.933-2.952-3.573-3.266-2.306-.353-2.836-.046-3.956 1.002-1.007.945-1.41 2.857-.937 4.224.474 1.367 1.58 2.083 2.744 2.725 1.965 1.083 8.022 2.192 8.89 2.309zm4.251.186c.418-.026 4.958-1.22 6.927-1.982 1.752-.677 3.401-1.619 4.318-3.404.633-1.229.841-2.521.028-3.728-.764-1.138-1.95-1.704-3.249-1.508-1.596-.044-3.341 1.271-4.167 2.527-1.173 1.782-3.475 7.053-3.857 8.095zM9.364 29.812h20.634v28.071c-.002.983-.005.987-.986.987-6.251 0-12.504-.017-18.756.013-.741.004-.906-.223-.903-.933.022-9.046.013-18.089.011-27.133v-1.005zM52.891 29.812s-.015 18.987-.019 28.073c0 .948-.026.985-.955.985-6.296.003-12.594-.004-18.892.009-.557 0-.738-.178-.738-.74.016-9.016.01-18.031.013-27.049 0-.205-.013-1.278-.013-1.278h20.604z"]
    },
    Entertainment: {
        viewBox: "0 0 100 125",
        path: ["M5273.1 2400.1v-2c0-2.8-5-4-9.7-4s-9.7 1.3-9.7 4v2c0 1.8.7 3.6 2 4.9l5 4.9c.3.3.4.6.4 1v6.4c0 .4.2.7.6.8l2.9.9c.5.1 1-.2 1-.8v-7.2c0-.4.2-.7.4-1l5.1-5c1.3-1.3 2-3.1 2-4.9zm-9.7-.1c-4.8 0-7.4-1.3-7.5-1.8.1-.5 2.7-1.8 7.5-1.8s7.3 1.3 7.5 1.8c-.2.5-2.7 1.8-7.5 1.8z",
        "M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM93.6 5H6.4C4.2 5 2.5 6.7 2.5 8.9v82.2c0 2.1 1.7 3.9 3.9 3.9h87.2c2.1 0 3.9-1.7 3.9-3.9V8.9c0-2.2-1.7-3.9-3.9-3.9zM21 87.2H10.3V74.4H21v12.8zm0-20.5H10.3V53.9H21v12.8zm0-20.6H10.3V33.3H21v12.8zm0-20.5H10.3V12.8H21v12.8zm41.8 26.7L43.1 64.6c-1.8 1.1-4.1-.2-4.1-2.3V37.7c0-2.1 2.3-3.4 4.1-2.3l19.7 12.3c1.6 1.1 1.6 3.5 0 4.6zm26.9 34.9H79V74.4h10.7v12.8zm0-20.5H79V53.9h10.7v12.8zm0-20.6H79V33.3h10.7v12.8zm0-20.5H79V12.8h10.7v12.8z"]
    },
    Misc: {
        viewBox: "0 0 24 30",
        path: [" M14.364 11.456l3.633 4.776A2.97 2.97 0 0115.634 21H8.366a2.97 2.97 0 01-2.363-4.768l3.633-4.776a2.97 2.97 0 014.728 0zM9 3a2 2 0 012 2v1a2 2 0 11-4 0V5a2 2 0 012-2zM5 8a2 2 0 012 2v1a2 2 0 11-4 0v-1a2 2 0 012-2zm10-5a2 2 0 012 2v1a2 2 0 11-4 0V5a2 2 0 012-2zm4 5a2 2 0 012 2v1a2 2 0 11-4 0v-1a2 2 0 012-2z"]
    },
    Close: {
        viewBox: "0 0 16 20",
        path: ["M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"]
    },
    Edit: {
        viewBox: "0 0 100 125",
        path: ["M77.84,16.15a12,12,0,0,0-17,0L16.1,60.92A4,4,0,0,0,15,63.28L12.66,82.9a4,4,0,0,0,4,4.46l.47,0L36.72,85a4,4,0,0,0,2.36-1.14L83.85,39.13a12,12,0,0,0,0-17ZM34.41,77.26,21.2,78.8l1.55-13.21L55.28,33.05,66.95,44.72ZM78.19,33.47,72.6,39.06,60.94,27.4l5.59-5.59a4,4,0,0,1,5.66,0l6,6a4,4,0,0,1,0,5.66Z"]
    },
    Add: {
        viewBox: "0 0 7.02666 8",
        path: ["M5.97332 3.41345l0 0c0,0.348461 -0.291106,0.629701 -0.636606,0.629701l-1.28648 0 0 1.27334c0,0.341559 -0.28478,0.629701 -0.636736,0.629701l0 0c-0.352311,0 -0.636736,-0.288142 -0.636736,-0.629701l0 -1.27334 -1.28684 0c-0.345539,0 -0.636602,-0.28137 -0.636602,-0.629701l0 0c0,-0.348327 0.291106,-0.629701 0.636602,-0.629701l1.28684 0 0 -1.27334c0,-0.341689 0.284512,-0.629965 0.636736,-0.629965l0 0c0.351957,0 0.636736,0.288276 0.636736,0.629965l0 1.27334 1.28644 0c0.345543,0 0.63665,0.281374 0.63665,0.629701l0 0z"]
    },
    Menu: {
        viewBox: "0 0 90 112.5",
        path: ["M45,6.5C23.7,6.5,6.5,23.7,6.5,45S23.7,83.5,45,83.5S83.5,66.3,83.5,45S66.3,6.5,45,6.5z M25.7,53c-4.4,0-8-3.6-8-8  s3.6-8,8-8c4.4,0,8,3.6,8,8S30.2,53,25.7,53z M45,53c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S49.4,53,45,53z M64.3,53  c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S68.7,53,64.3,53z"]
    },
    Delete: {
        viewBox: "0 0 100 125",
        path: ["M6,34a8,8,0,0,0,8,8V82A16,16,0,0,0,30,98H70A16,16,0,0,0,86,82V42a8,8,0,0,0,8-8V26a8,8,0,0,0-8-8H70V10a8,8,0,0,0-8-8H38a8,8,0,0,0-8,8v8H14a8,8,0,0,0-8,8ZM78,82a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V42H78ZM38,10H62v8H38ZM14,26H86v8H14Z",
        "M34,82a4,4,0,0,0,4-4V54a4,4,0,0,0-8,0V78A4,4,0,0,0,34,82Z", 
        "M50,82a4,4,0,0,0,4-4V54a4,4,0,0,0-8,0V78A4,4,0,0,0,50,82Z",
        "M66,82a4,4,0,0,0,4-4V54a4,4,0,0,0-8,0V78A4,4,0,0,0,66,82Z"]
    },
    Less_than: {
        viewBox: "0 0 300 375",
        path: ["M245.2,277c-3.5,0-7.1-0.9-10.4-2.7L44.2,168.8c-6.8-3.8-11.1-11-11.1-18.8s4.3-15,11.1-18.8L235,25.7   c10.4-5.7,23.5-2,29.2,8.4s2,23.5-8.4,29.2L99,150l156.7,86.7c10.4,5.7,14.2,18.8,8.4,29.2C260.1,273,252.8,277,245.2,277z"]
    },
    Greater_than: {
        viewBox: "0 0 100 125",
        path: ["M22.1,95.7c-3,0-5.9-1.5-7.6-4.2c-2.7-4.2-1.4-9.8,2.8-12.4L63.1,50L17.3,21.9c-4.2-2.6-5.6-8.1-3-12.4   c2.6-4.2,8.1-5.6,12.4-3l58,35.7c2.6,1.6,4.3,4.5,4.3,7.6s-1.6,6-4.2,7.7l-58,36.8C25.4,95.3,23.7,95.7,22.1,95.7z"]
    },
    Down_arrow: {
        viewBox: "0 0 668 468.75",
        path:["M363 363l293 -292c16,-17 16,-43 0,-59 -16,-16 -43,-16 -59,0l-263 263 -263 -263c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l292 292c17,16 43,16 59,0z"]
    },
    Up_arrow: {
        viewBox: "0 0 24 30",
        path: ["M7.71,14.71,12,10.41l4.29,4.29a1,1,0,0,0,1.41-1.41l-5-5a1,1,0,0,0-1.41,0l-5,5a1,1,0,0,0,1.41,1.41Z"]
    },
    Menu: {
        viewBox: "0 0 64 80",
        path:["M11,41c4.962,0,9-4.037,9-9s-4.038-9-9-9s-9,4.037-9,9S6.038,41,11,41z",
        "M41,32c0-4.963-4.038-9-9-9s-9,4.037-9,9s4.038,9,9,9S41,36.963,41,32z",
        "M53,23c-4.962,0-9,4.037-9,9s4.038,9,9,9s9-4.037,9-9S57.962,23,53,23z"]
    }
}



export default ICONS;