import React, { useState } from 'react';

const CategoryIcons = {
    'Desarrollo web': (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[var(--sec)] opacity-70"
        >
            <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
        </svg>
    ),
    'Desarrollo móvil': (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[var(--sec)] opacity-70"
        >
            <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
        </svg>
    ),
    'Desarrollo Backend': (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-6 h-6 text-[var(--sec)] opacity-70"
        >
            <circle
                cx="23"
                cy="23"
                r="1"
            />
            <rect
                x="8"
                y="22"
                width="12"
                height="2"
            />
            <circle
                cx="23"
                cy="9"
                r="1"
            />
            <rect
                x="8"
                y="8"
                width="12"
                height="2"
            />
            <path d="M26,14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v6a2,2,0,0,0,2,2H8v4H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V20a2,2,0,0,0-2-2H24V14ZM6,6H26v6H6ZM26,26H6V20H26Zm-4-8H10V14H22Z" />
            <rect
                id="_Transparent_Rectangle_"
                data-name="&lt;Transparent Rectangle&gt;"
                fill="none"
                width="32"
                height="32"
            />
        </svg>
    ),
};

const SkillsList = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const skills = {
        'Desarrollo web': [
            'Aplicaciones de una sola página (SPAs)',
            'Landing pages y sitios web de negocios',
            'Portafolios webs',
            'Dashboards administrativos y paneles de control',
        ],
        'Desarrollo móvil': ['Flutter mobile apps', 'Material Design'],
        'Desarrollo Backend': [
            'APIs RESTful',
            // 'Microservicios',
            'Bases de datos relacionales y no relacionales',
        ],
    };

    const toggleItem = (item: string) => {
        setOpenItem(openItem === item ? null : item);
    };

    return (
        <div className="text-left pt-3 md:pt-9">
            <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
                ¿Qué hago?
            </h3>
            <ul className="space-y-4 mt-4 text-lg">
                {Object.entries(skills).map(([category, items]) => (
                    <li
                        key={category}
                        className="w-full"
                    >
                        <div
                            onClick={() => toggleItem(category)}
                            className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
                        >
                            <div className="flex items-center gap-3 p-4">
                                {CategoryIcons[category]}
                                <div className="flex items-center gap-2 flex-grow justify-between">
                                    <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                                        <span className="block truncate text-[var(--white)] text-lg">
                                            {category}
                                        </span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                                            openItem === category
                                                ? 'rotate-180'
                                                : ''
                                        }`}
                                    >
                                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div
                                className={`transition-all duration-300 px-4 ${
                                    openItem === category
                                        ? 'max-h-[500px] pb-4 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                                    {items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <span className="pl-1">•</span>
                                            <li className="pl-3">{item}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsList;
