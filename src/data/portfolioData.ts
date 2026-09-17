import {
  ResearchArea,
  ProjectItem,
  PublicationItem,
  SkillCategory,
  StudyAreaLocation,
  EducationItem,
  ExperienceItem,
  AwardItem
} from '../types';

// Images generated for the portfolio
export const PORTFOLIO_IMAGES = {
  portrait: 'https://i.ibb.co.com/NnkjLSTj/photo.png',
  urbanHydrology: '/src/assets/images/urban_hydrology_1789620929987.jpg',
  gisWatershed: '/src/assets/images/gis_watershed_1789620940929.jpg',
  rainwaterHarvesting: '/src/assets/images/rainwater_harvesting_1789620954863.jpg',
  chattogramEstuary: '/src/assets/images/chattogram_estuary_1789620969991.jpg',
};

export const RESEARCHER_PROFILE = {
  name: 'ANIKA TASNIM SADIA',
  initials: 'ATS',
  title: 'CIVIL ENGINEERING(WATER RESOURCES ENGINEERING)',
  subheading: 'CIVIL ENGINEERING • GIS • HYDROLOGIC MODELING',
  affiliation: 'Chittagong University of Engineering & Technology (CUET)',
  department: 'Machine Learning (CMIP6 Projections) & Water Resources',
  email: 'anikatasnimsadia02@gmail.com',
  location: 'Chattogram, Bangladesh',
  resumeUrl: 'https://file.tmper.app/image_1789653212642_3bd1cab9.pdf',
  resumeFileName: 'Anika_Tasnim_Sadia_CV.pdf',
  tagline: 'Exploring sustainable urban water management through hydrologic modeling, GIS, climate analysis, and environmental assessment.',
  shortBio: `Civil Engineering graduate from Chittagong University of Engineering and Technology (CUET) with a focus on Water Resources Engineering, hydrology, urban drainage, and GIS-based spatial analysis. Experienced in hydrologic modelling, rainfall–runoff analysis, stormwater assessment, and environmental impact assessment.`,
  detailedBio: [
    `Civil Engineering graduate from Chittagong University of Engineering and Technology (CUET) with a focus on Water Resources Engineering, hydrology, urban drainage, and GIS-based spatial analysis. Experienced in hydrologic modelling, rainfall–runoff analysis, stormwater assessment, and environmental impact assessment through undergraduate research.`,
    `Familiar with climate-related water resources analysis and sustainable water management. Interested in contributing to research, field-based data collection, GIS analysis, and climate change and disaster management projects.`
  ],
  links: {
    googleScholar: 'https://scholar.google.com',
    orcid: 'https://orcid.org',
    linkedin: 'https://linkedin.com/in/anika-tasnim-sadia',
    github: 'https://github.com',
    researchGate: 'https://researchgate.net'
  }
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'hydrologic-modeling',
    category: 'HYDROLOGIC MODELING',
    title: 'Dynamic Rainfall-Runoff & Urban Stormwater Systems',
    description: 'Computational simulation of high-intensity monsoonal storm events using EPA SWMM and PySWMM to evaluate pipe capacity, peak discharge, and urban waterlogging dynamics.',
    image: PORTFOLIO_IMAGES.urbanHydrology,
    keyAspects: [
      'Subcatchment kinematic wave routing',
      'Hydraulic conduit backwater & surcharging simulation',
      'Green infrastructure (LID) runoff attenuation'
    ],
    toolsUsed: ['EPA SWMM 5.2', 'PySWMM', 'Python', 'HEC-RAS'],
    linkText: 'View Research →',
    details: {
      overview: 'Investigating urban rainfall-runoff mechanisms within densely built environments under extreme tropical storm patterns.',
      objectives: [
        'Quantify peak hydrograph reduction through decentralized stormwater retention',
        'Simulate localized inundation depth and conduit overload probabilities',
        'Develop parameter calibration frameworks for ungauged urban catchments'
      ],
      methodology: 'Integrated SWMM rainfall-runoff models parameterized with high-resolution topographic and land cover data.',
      impact: 'Provides municipal civil authorities and urban planners with empirical hydro-statistical data to design flood-resilient drainage systems.'
    }
  },
  {
    id: 'gis-remote-sensing',
    category: 'GIS & REMOTE SENSING',
    title: 'Watershed Delineation & Spatial Terrain Analytics',
    description: 'Advanced geospatial workflows using ArcGIS Pro for DEM conditioning, hydrological flow accumulation, slope analysis, and multi-temporal LULC mapping.',
    image: PORTFOLIO_IMAGES.gisWatershed,
    keyAspects: [
      'DEM sink-filling & D8 flow direction modeling',
      'Supervised Landsat/Sentinel LULC classification',
      'Hydrologic soil group & curve number (SCS-CN) extraction'
    ],
    toolsUsed: ['ArcGIS Pro', 'GeoPandas', 'Spatial Analyst', 'Google Earth Engine'],
    linkText: 'View Research →',
    details: {
      overview: 'Leveraging high-resolution geospatial datasets to characterize morphometric and topographic parameters governing coastal catchment hydrology.',
      objectives: [
        'Extract micro-catchment drainage boundaries in urban terrains',
        'Quantify imperviosity progression across commercial corridors over two decades',
        'Automate spatial raster-to-SWMM input file pipelines with Python'
      ],
      methodology: 'Spatial terrain processing and supervised satellite image classification combined with vector network routing.',
      impact: 'Enables rapid spatial identification of flood hazard hotspots and optimal detention basin locations.'
    }
  },
  {
    id: 'rainwater-harvesting',
    category: 'RAINWATER HARVESTING',
    title: 'Decentralized Industrial & Commercial RWH Systems',
    description: 'Evaluating volumetric reliability, non-potable substitution potential, and storage capacity optimization of large-scale rooftop rainwater harvesting networks.',
    image: PORTFOLIO_IMAGES.rainwaterHarvesting,
    keyAspects: [
      'Daily water balance & continuous simulation algorithms',
      'Rooftop catchment yield vs. demand matching',
      'Peak stormwater hydrograph shaving'
    ],
    toolsUsed: ['SWMM LID Module', 'Python', 'ArcGIS', 'Statistical Hydrology'],
    linkText: 'View Research →',
    details: {
      overview: 'Assessing industrial and commercial rooftop footprints as decentralized reservoirs to mitigate urban flash flooding while replenishing manufacturing water supply.',
      objectives: [
        'Model storage tank reliability across dry and monsoon seasons',
        'Analyze non-potable municipal water offset percentage for industrial facilities',
        'Evaluate the hydrologic damping effect on downstream drainage outfalls'
      ],
      methodology: 'Continuous 10-year rainfall time-series modeling coupled with spatial rooftop footprint extractions.',
      impact: 'Establishes a practical techno-economic blueprint for industrial sustainability and groundwater overdraft reduction.'
    }
  },
  {
    id: 'life-cycle-assessment',
    category: 'LIFE CYCLE ASSESSMENT',
    title: 'Cradle-to-Grave Environmental Assessment of Water Infrastructure',
    description: 'Quantifying carbon footprint, embodied energy, and environmental impacts of decentralized water harvesting materials using OpenLCA and ReCiPe 2016 indicators.',
    image: PORTFOLIO_IMAGES.chattogramEstuary,
    keyAspects: [
      'Life cycle inventory (LCI) construction for HDPE vs. concrete cisterns',
      'Global warming potential (GWP) and acidification assessment',
      'Eco-efficiency benchmarking across operational lifespans'
    ],
    toolsUsed: ['OpenLCA', 'ecoinvent database', 'ReCiPe 2016', 'Excel LCA Matrix'],
    linkText: 'View Research →',
    details: {
      overview: 'Conducting comprehensive environmental life cycle assessments to verify that decentralized water infrastructure delivers net-positive ecological benefits.',
      objectives: [
        'Compare environmental burdens of diverse cistern storage materials (HDPE, R.C.C., Masonry)',
        'Calculate environmental payback period when offsetting municipal piped water',
        'Integrate life cycle results directly into multi-criteria decision models'
      ],
      methodology: 'ISO 14040/44 compliant attributional LCA using the ecoinvent database and midpoint/endpoint impact indicators.',
      impact: 'Bridges civil engineering construction choices with international sustainability metrics and carbon reduction goals.'
    }
  }
];

export const FEATURED_PROJECT: ProjectItem = {
  id: 'thesis-rwh-chattogram',
  title: 'Life Cycle and Hydrologic Modeling of Rainwater Harvesting in Urban Commercial and Industrial Zones of Chattogram',
  year: '',
  category: 'RESEARCH',
  categoryLabel: 'UNDERGRADUATE THESIS & FEATURED STUDY',
  shortDescription: 'Comprehensive investigation evaluating the hydrologic runoff reduction and cradle-to-grave environmental life cycle impacts of implementing large-scale rooftop rainwater harvesting systems across the Agrabad Commercial Area and Chattogram Export Processing Zone (CEPZ).',
  fullDescription: `Urban commercial and industrial centers in coastal Bangladesh face severe dual crises: chronic monsoon waterlogging caused by rapid surface imperviosity, alongside extreme municipal water supply deficits and depleted coastal aquifers. This undergraduate capstone research develops an integrated hydrologic-environmental modeling framework to address both issues simultaneously.

Using EPA SWMM 5.2, daily rainfall data over a multi-year period, and high-resolution spatial datasets in ArcGIS, the study delineates subcatchments, extracts rooftop surface areas, and simulates the storage-yield-reliability dynamics of decentralized Rainwater Harvesting (RWH) networks. Furthermore, by employing OpenLCA with the ReCiPe 2016 methodology, the research quantifies the carbon footprint and environmental impacts of various tank materials (HDPE vs. reinforced concrete) to establish the net sustainability balance.`,
  image: 'https://i.ibb.co.com/HLbqTKq4/Screenshot-8.png',
  secondaryImage: 'https://i.ibb.co.com/sJ2f4YgT/Screenshot-9.png',
  tools: ['SWMM 5.2', 'ArcGIS Pro', 'OpenLCA', 'ReCiPe 2016'],
  studyArea: 'Agrabad Commercial Area & CEPZ, Chattogram',
  researchQuestion: 'How effectively can decentralized rooftop rainwater harvesting systems in high-density commercial and industrial districts mitigate monsoon drainage surcharge while minimizing cradle-to-grave environmental burdens?',
  methodology: 'Coupled hydrodynamic runoff modeling (SWMM), GIS spatial rooftop classification, continuous water balance simulation, and ISO 14040/44 compliant Life Cycle Assessment (OpenLCA).',
  outcomes: [
    'Demonstrated up to 28–34% peak stormwater discharge reduction at critical storm sewer outfalls.',
    'Quantified potential substitution of over 40% non-potable industrial cooling and sanitation demand in CEPZ.',
    'The Global Warming Potential decreased by approximately 41.52%, primarily due to reduced energy consumption for water extraction.'
  ],
  featured: true
};

export const ALL_PROJECTS: ProjectItem[] = [
  FEATURED_PROJECT,
  {
    id: 'swmm-agrabad-waterlogging',
    title: 'Urban Drainage Network Performance Under High-Intensity Monsoons in Agrabad Commercial Area',
    year: '2025',
    category: 'HYDROLOGY',
    categoryLabel: 'HYDROLOGIC MODELING',
    shortDescription: 'Hydrodynamic modeling of the primary storm sewer network in Agrabad, examining backwater effects caused by tidal fluctuations and conduit sediment deposition.',
    image: PORTFOLIO_IMAGES.urbanHydrology,
    tools: ['EPA SWMM', 'ArcGIS', 'AutoCAD Civil 3D', 'Hydrodynamic Routing'],
    studyArea: 'Agrabad Commercial Area, Chattogram',
    methodology: '1D dynamic wave routing across 84 conduit links and 62 junctions calibrated against observed flood water levels.',
    outcomes: [
      'Isolated 5 primary bottlenecks causing backwater surcharge during high tide coincide with heavy storms.',
      'Proposed retention swales and backflow flap gate configurations reducing localized inundation duration by 45%.'
    ]
  },
  {
    id: 'lulc-chattogram-sprawl',
    title: 'Multi-Decadal Land Use Land Cover (LULC) Dynamics & Impervious Surface Expansion in Coastal Chattogram',
    year: '2024–2025',
    category: 'GIS',
    categoryLabel: 'GIS & REMOTE SENSING',
    shortDescription: 'Satellite remote sensing analysis evaluating the 20-year conversion of agricultural wetlands and hill topography into impervious urban surfaces, quantifying direct impacts on curve numbers.',
    image: PORTFOLIO_IMAGES.gisWatershed,
    tools: ['ArcGIS Pro', 'Landsat 7/8/9', 'Google Earth Engine', 'Spatial Analyst'],
    studyArea: 'Chattogram Metropolitan Area (1995–2025)',
    methodology: 'Supervised maximum likelihood classification and NDVI/NDBI indices validated with ground truth spatial points.',
    outcomes: [
      'Calculated a 140% expansion in impervious built-up area between 2000 and 2024.',
      'Derived spatially distributed SCS Curve Numbers (CN) for hydrologic modeling parameterization.'
    ]
  },
  {
    id: 'lca-water-cisterns',
    title: 'Comparative Life Cycle Assessment of Stormwater Cistern Materials in Subtropical Coastal Environments',
    year: '2025',
    category: 'ENVIRONMENT',
    categoryLabel: 'ENVIRONMENTAL ASSESSMENT',
    shortDescription: 'Cradle-to-grave environmental impact assessment evaluating reinforced concrete, masonry, and HDPE rainwater storage units under coastal climatic conditions.',
    image: PORTFOLIO_IMAGES.chattogramEstuary,
    tools: ['OpenLCA', 'ecoinvent 3.8', 'ReCiPe 2016', 'Excel'],
    studyArea: 'Coastal Bangladesh Urban Context',
    methodology: 'Attributional LCA modeling with functional unit of 100 m³ water stored and supplied over a 30-year operational life cycle.',
    outcomes: [
      'Highlighted transportation distance and cement clinker ratios as dominant carbon drivers.',
      'Established environmental payback metrics for green building rainwater harvesting adoption.'
    ]
  },
  {
    id: 'climate-idf-curves',
    title: 'Evaluation of Extreme Rainfall Trends & Updated IDF Relationships for Coastal Meteorological Stations',
    year: '2024',
    category: 'CLIMATE',
    categoryLabel: 'CLIMATE & WATER RESOURCES',
    shortDescription: 'Statistical analysis of 35-year daily and sub-daily precipitation records to evaluate shifting return periods and non-stationary intensity-duration-frequency (IDF) curves.',
    image: PORTFOLIO_IMAGES.urbanHydrology,
    tools: ['Python', 'SciPy', 'Gumbel EV1', 'Log-Pearson Type III'],
    studyArea: 'Chattogram & Patenga Meteorological Stations',
    methodology: 'Extreme value statistical distributions (Gumbel, GEV, LP3) with Mann-Kendall trend tests for extreme rainfall events.',
    outcomes: [
      'Identified statistically significant increases in 1-hour and 3-hour short-duration extreme monsoon precipitation.',
      'Formulated revised IDF polynomial coefficients for local stormwater drainage design standards.'
    ]
  },
  {
    id: 'cepz-industrial-water-audit',
    title: 'Rooftop Rainwater Harvesting Feasibility & Industrial Water Demand Offsetting in CEPZ',
    year: '2025',
    category: 'RESEARCH',
    categoryLabel: 'RESEARCH & FEASIBILITY',
    shortDescription: 'Detailed spatial inventory of industrial factory roof areas in Chattogram EPZ and analytical calculation of non-potable process water offsetting potential.',
    image: PORTFOLIO_IMAGES.rainwaterHarvesting,
    tools: ['ArcGIS', 'Python', 'Survey Analysis', 'SWMM'],
    studyArea: 'Chattogram Export Processing Zone (CEPZ)',
    methodology: 'Rooftop spatial digitization from high-resolution satellite imagery coupled with factory water consumption auditing.',
    outcomes: [
      'Digitized 320,000+ m² of industrial factory roof footprints across garment and manufacturing sectors.',
      'Showed that 1.2 million m³ of high-quality rainwater can be safely captured annually.'
    ]
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-conf-2026-1',
    type: 'CONFERENCE',
    typeLabel: 'CONFERENCE PAPER',
    year: 'ICACE 2026',
    title: 'Hydrologic Modelling of Rainwater Harvesting in AGRABAD AND CEPZ, CHATTOGRAM ',
    authors: 'Sadia Islam*1, Anika Tasnim Sadia2 and Aysha Akter3',
    venue: '8th International Conference on Advances in Civil Engineering (ICACE2026)',
    status: 'UNDER REVIEW',
    link: '#',
    abstract: 'Rapid urban sprawl in coastal cities has heightened peak stormwater runoff while stressing conventional groundwater aquifers. This paper presents an integrated hydrologic modeling methodology utilizing EPA-SWMM to assess the runoff reduction benefits of retrofitting commercial and industrial roofs in Chattogram with rainwater harvesting cisterns.',
    keywords: ['Hydrologic Modeling', 'EPA SWMM', 'Rainwater Harvesting', 'Agrabad Commercial Area', 'CEPZ', 'Peak Flow Attenuation']
  },
  {
    id: 'pub-journal-2026-1',
    type: 'MANUSCRIPT',
    typeLabel: 'Abstract accepted',
    year: 'ICERIE 2027',
    title: 'Comparative Life Cycle Assessment of Conventional Water Supply and Rooftop Rainwater Harvesting in a Selected Industrial Area',
    status: 'Manuscript in preparation',
    link: '#',
    abstract: 'This manuscript explores the coupled environmental life cycle impacts (LCA) and hydrodynamic stormwater alleviation of industrial rainwater harvesting in coastal manufacturing belts. Using OpenLCA and ReCiPe 2016 midpoint indicators, the study benchmarks cradle-to-grave global warming potentials against municipal water treatment avoidance.',
    keywords: ['Life Cycle Assessment (LCA)', 'OpenLCA', 'Rainwater Harvesting', 'Urban Hydrology', 'Eco-efficiency', 'Coastal Cities']
  },
  {
    id: 'pub-conf-2025-2',
    type: 'MANUSCRIPT',
    typeLabel: 'RESEARCH MANUSCRIPT',
    year: '2026',
    title: 'Climate associated groundwater table changes and drought risk in Bangladesh under CMIP6 projections',
    status: 'Manuscript in preparation',
    link: '#',
    abstract: 'An investigation into groundwater table dynamics and drought susceptibility in Bangladesh using downscaled CMIP6 multi-model climate ensembles and predictive hydrological indicators.',
    keywords: ['CMIP6', 'Groundwater Table', 'Drought Risk', 'Climate Projections', 'Machine Learning']
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: 'HYDROLOGIC MODELING',
    subtitle: 'Surface Water & Drainage Simulation',
    iconName: 'Droplets',
    skills: [
      { name: 'EPA SWMM 5.2', highlight: true, context: 'Runoff, pipe hydraulics, LID retention modeling' },
      { name: 'PySWMM', highlight: true, context: 'Python wrapper for programmatic SWMM automation' },
      { name: 'Rainfall-Runoff Modeling', context: 'SCS-CN, Green-Ampt, Horton infiltration methods' },
      { name: 'Urban Drainage Modeling', context: 'Dynamic wave & kinematic wave routing' }
    ]
  },
  {
    title: 'GIS & SPATIAL ANALYSIS',
    subtitle: 'Geospatial Intelligence & Remote Sensing',
    iconName: 'Map',
    skills: [
      { name: 'ArcGIS Pro / ArcMap', highlight: true, context: 'Spatial Analyst, 3D Analyst, ModelBuilder' },
      { name: 'DEM Analysis', context: 'Sink filling, slope, aspect, D8 flow direction' },
      { name: 'Watershed / Subcatchment Delineation', highlight: true, context: 'Pour-point & stream network extraction' },
      { name: 'LULC Classification', context: 'Supervised classification of multi-spectral satellite imagery' }
    ]
  },
  {
    title: 'ENVIRONMENTAL MODELING',
    subtitle: 'Sustainability & Life Cycle Metrics',
    iconName: 'Leaf',
    skills: [
      { name: 'OpenLCA', highlight: true, context: 'Attributional LCA system modeling & parameterization' },
      { name: 'Life Cycle Assessment (LCA)', highlight: true, context: 'ISO 14040/14044 methodology' },
      { name: 'ReCiPe 2016 Method', context: 'Midpoint (GWP, acidification) & endpoint damage indicators' },
      { name: 'ecoinvent Database', context: 'Industrial material & energy background datasets' },
      { name: 'Environmental Impact Assessment (EIA)', context: 'Stormwater infrastructure environmental auditing' }
    ]
  },
  {
    title: 'DATA & COMPUTATION',
    subtitle: 'Engineering Analysis & Statistics',
    iconName: 'Code',
    skills: [
      { name: 'Python', highlight: true, context: 'Scientific computing, data manipulation, visualization' },
      { name: 'Machine Learning (CMIP6)', highlight: true, context: 'Climate downscaling, projections, and predictive hydrological models' },
      { name: 'IDF Curve Generation', highlight: true, context: 'Intensity-Duration-Frequency empirical fitting' }
    ]
  }
];

export const STUDY_AREAS: StudyAreaLocation[] = [
  {
    name: 'Agrabad Commercial Area',
    type: 'High-Density Commercial Corridor',
    focus: 'Tidal Waterlogging & Rooftop Harvesting',
    method: 'EPA SWMM 1D Hydraulic Routing & ArcGIS Rooftop Extraction',
    characteristics: 'High imperviosity (>85%), tidal backwater susceptibility from Karnaphuli tributaries, high commercial building footprint.',
    coordinates: '22.324° N, 91.815° E (Chattogram)',
    image: PORTFOLIO_IMAGES.urbanHydrology
  },
  {
    name: 'Chattogram Export Processing Zone (CEPZ)',
    type: 'Industrial Manufacturing Hub',
    focus: 'Industrial RWH Sizing & LCA Environmental Analysis',
    method: 'OpenLCA (ReCiPe 2016) & Continuous Daily Water Balance Simulation',
    characteristics: 'Expansive warehouse & factory roof catchments, substantial non-potable process water demand, municipal piped supply constraints.',
    coordinates: '22.287° N, 91.782° E (Chattogram)',
    image: PORTFOLIO_IMAGES.rainwaterHarvesting
  },
  {
    name: 'Chattogram Metropolitan & Karnaphuli Estuary',
    type: 'Coastal River Basin & Urban Watershed',
    focus: 'Long-term LULC Sprawl & Drainage Network Capacity',
    method: 'Landsat Multi-Temporal Classification & Elevation Model Conditioning',
    characteristics: 'Coastal hilly topography, dynamic tidal regime, rapid conversion of natural canals into culverts and built-up land.',
    coordinates: '22.356° N, 91.783° E (Chattogram)',
    image: PORTFOLIO_IMAGES.chattogramEstuary
  },
  {
    name: 'Sylhet & Surma Basin Region',
    type: 'Comparative High-Precipitation Basin',
    focus: 'Regional Hydrologic Runoff & Flash Flood Dynamics',
    method: 'Statistical Frequency Analysis & Rainfall-Runoff Sensitivity',
    characteristics: 'One of the highest rainfall belts in South Asia; comparative catchment response analysis against coastal urban basins.',
    coordinates: '24.894° N, 91.868° E (Northeastern Bangladesh)',
    image: PORTFOLIO_IMAGES.gisWatershed
  }
];

export const RESEARCH_INTERESTS: { title: string; subtitle: string; description: string; tag: string }[] = [
  {
    title: 'URBAN WATER MANAGEMENT',
    subtitle: 'Integrated Urban Water Systems & Resilience',
    description: 'Developing sustainable urban drainage strategies (SuDS), retention basin optimization, and stormwater management under dense urban constraints.',
    tag: 'Priority Focus'
  },
  {
    title: 'HYDROLOGIC MODELING',
    subtitle: 'Physics-Based Computational Hydrology',
    description: 'Dynamic 1D/2D rainfall-runoff simulation, hydrodynamic pipe network modeling with SWMM, and urban flash flood prediction.',
    tag: 'Specialization'
  },
  {
    title: 'RAINWATER HARVESTING',
    subtitle: 'Decentralized Water Security Infrastructure',
    description: 'Volumetric reliability modeling, storage cistern optimization, and non-potable industrial substitution to counter groundwater depletion.',
    tag: 'Thesis Area'
  },
  {
    title: 'CMIP6 CLIMATE PROJECTIONS',
    subtitle: 'Groundwater Table Changes & Drought Risk Assessment',
    description: 'Groundwater table changes and drought risk assessment.',
    tag: 'Climate Projections'
  },
  {
    title: 'GIS & REMOTE SENSING',
    subtitle: 'Geospatial Terrain & Satellite Hydro-Informatics',
    description: 'High-resolution digital elevation modeling (DEM), subcatchment hydrological delineation, and temporal LULC imperviosity tracking.',
    tag: 'Methodology'
  },
  {
    title: 'CLIMATE CHANGE & WATER',
    subtitle: 'Non-Stationary Meteorological Extremes',
    description: 'Formulating updated IDF relationships, monsoon precipitation frequency shifts, and climate-resilient civil engineering standards.',
    tag: 'Climate Resilience'
  },
  {
    title: 'SUSTAINABLE INFRASTRUCTURE',
    subtitle: 'Low Impact Development (LID) & Nature-Based Solutions',
    description: 'Permeable pavements, bioswales, and bio-retention cells integrated into modern urban civil engineering planning.',
    tag: 'Sustainability'
  },
  {
    title: 'LIFE CYCLE ASSESSMENT',
    subtitle: 'Cradle-to-Grave Environmental Accounting',
    description: 'Quantifying carbon footprint and environmental impacts of hydraulic infrastructure materials using OpenLCA and ReCiPe 2016 indicators.',
    tag: 'Eco-Efficiency'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'cuet-bsc-civil',
    period: '',
    degree: 'Bachelor of Science (B.Sc.) in Civil Engineering',
    institution: 'Chittagong University of Engineering & Technology (CUET)',
    department: 'Department of Civil Engineering',
    specialization: 'Water Resources Engineering Specialization',
    cgpaOrStatus: '',
    details: [
      'Undergraduate Capstone Research: Life Cycle and Hydrologic Modeling of Rainwater Harvesting in Urban Commercial and Industrial Zones of Chattogram.',
      'Core Coursework: Open Channel Hydraulics, Hydrology & Water Resources Engineering, Environmental Engineering, GIS & Remote Sensing Applications, Structural Analysis, Fluid Mechanics, Soil Mechanics & Foundation Engineering.',
      'Active participant in the Departmental Water Resources Engineering and Environmental Modeling laboratories.'
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'undergraduate-assistant',
    period: '2024 – Present',
    role: 'Undergraduate Assistant (Hydrology & GIS)',
    organization: 'Department of Civil Engineering, CUET',
    location: 'Chattogram, Bangladesh',
    description: 'Conducting computational hydrologic simulations, satellite geospatial terrain processing, and life cycle environmental accounting.',
    highlights: [
      'Engineered EPA-SWMM models for complex multi-junction stormwater networks across commercial catchments.',
      'Processed digital elevation models (DEM) and delineated micro-subcatchments using ArcGIS Pro.',
      'Constructed Life Cycle Inventories (LCI) in OpenLCA assessing carbon emissions of civil storage tanks.'
    ]
  },
  {
    id: 'academic-fieldwork',
    period: '2023 – 2024',
    role: 'Civil Engineering Field Hydrology & Surveying Intern',
    organization: 'CUET Engineering Surveying & Water Laboratories',
    location: 'Chattogram & Coastal Estuary',
    description: 'Conducted field flow velocity measurements, channel cross-section profiling, and topographic leveling surveys.',
    highlights: [
      'Executed current-meter flow discharge gauging and water quality sampling in coastal urban canals.',
      'Trained in Total Station, Theodolite, and GPS surveying for drainage basin boundary verifications.'
    ]
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-1',
    year: '2026',
    title: 'Research Paper Acceptance & Presentation Recognition',
    organization: 'International Conference on Civil Engineering for Sustainable Development (ICCESD)',
    category: 'Academic Research',
    description: 'Accepted peer-reviewed conference paper on hydrologic SWMM modeling of industrial rainwater harvesting in coastal economic zones.',
    badge: 'Conference Award'
  },
  {
    id: 'award-2',
    year: '2025',
    title: 'Dean’s Honor List / Academic Merit Scholarship',
    organization: 'Chittagong University of Engineering & Technology (CUET)',
    category: 'Scholarship',
    description: 'Awarded for outstanding academic performance and high scholastic standing in the Department of Civil Engineering.',
    badge: 'Institutional Merit'
  },
  {
    id: 'award-3',
    year: '2025',
    title: 'Undergraduate Capstone Research Commendation',
    organization: 'Water Resources Engineering Division, CUET',
    category: 'Engineering Research',
    description: 'Commended for innovative integration of EPA-SWMM hydrodynamic modeling with OpenLCA environmental accounting.',
    badge: 'Research Excellence'
  },
  {
    id: 'award-4',
    year: '2024',
    title: 'National Civil Engineering Model & Poster Finalist',
    organization: 'National Water & Environmental Engineering Olympiad',
    category: 'Competition',
    description: 'Finalist presentation on sustainable urban drainage solutions (SuDS) for mitigating monsoonal tidal waterlogging.',
    badge: 'National Finalist'
  }
];
