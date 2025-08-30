import React, { useState } from 'react';
import { Server, Users, Zap, Shield, Star, CheckCircle, ArrowRight, Video } from 'lucide-react';
import LoginModal from './components/RegisterModal';

function App() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Navigáció */}
            <nav className="bg-gray-900/90 backdrop-blur-md border-b border-green-800/30 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-green-600 rounded-lg flex items-center justify-center">
                                <Server className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
          VoxelHost
        </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <a href="#features" className="text-gray-300 hover:text-green-400 transition-colors">Funkciók</a>
                            <a href="#plans" className="text-gray-300 hover:text-green-400 transition-colors">Csomagok</a>
                            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">Rólunk</a>
                            <a href="https://docs.voxelhost.hu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                                Dokumentáció
                            </a>
                        </div>

                        {/* Login gomb a jobb sarokba */}
                        <div className="hidden md:flex">
                            <a
                                href="https://panel.voxelhost.hu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-colors"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Fő rész */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-lime-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-green-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
                            Ingyenes Minecraft
                        </span>
                        <br />
                        <span className="text-white">Szerverek Hostingja</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
                        Indítsd el Minecraft szervered ingyen a VoxelHosttal! Szervereink Magyarországon találhatók, így gyors és stabil kapcsolatot biztosítanak Európában.
                    </p>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Nincsenek rejtett költségek, nincs időkorlát – teljes szabadságot kapsz te és barátaid számára.
                    </p>

                    {/* CTA gomb */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowLogin(true)}
                            className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-lime-600 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                            <span>Kezdd a szerveredet MA</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </section>

            {/* Funkciók */}
            <section id="features" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Miért válassz minket, a <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">VoxelHost</span>-ot?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Élvezd a legjobb ingyenes Minecraft hostingot prémium funkciókkal, kompromisszumok nélkül.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Zap, title: "Villámgyors", description: "Magyarországi szerverek, minimális késleltetéssel az európai játékosoknak." },
                            { icon: Shield, title: "Teljes biztonság", description: "DDoS védelem és biztonságos infrastruktúra, hogy a szervered mindig védve legyen." },
                            { icon: Users, title: "Több játékos", description: "Akár 20 játékos ingyenes csomagban, 50 játékos SMP csomagban." },
                            { icon: Star, title: "Folyamatos elérhetőség", description: "Megbízható szerverek, amik mindig online maradnak, amikor szükséged van rájuk." }
                        ].map((feature, index) => (
                            <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-green-900/30 hover:from-gray-700 hover:to-green-800/40 transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-green-800/30">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Csomagok */}
            <section id="plans" className="py-20 bg-gradient-to-br from-gray-800 to-green-900/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Válassz <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">Ingyenes csomagot</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Mindkét csomag teljesen ingyenes örökre. Válaszd azt, amelyik a legjobban megfelel az igényeidnek.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Free Plan */}
                        <div className="relative p-8 rounded-3xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-700/30">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Ingyenes Hosting</h3>
                                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent mb-2">
                                    0 Ft
                                </div>
                                <p className="text-gray-400">Örökre ingyenes, minden kötelezettség nélkül</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "24/7 szerver elérhetőség",
                                    "Akár 20 játékos",
                                    "Teljes mod támogatás",
                                    "Egyedi világ feltöltés",
                                    "Magyarországi szerverhely",
                                    "24/7 technikai támogatás",
                                    "DDoS védelem"
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setShowLogin(true)}
                                className="w-full bg-gradient-to-r from-green-500 to-lime-500 text-white py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-lime-600 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <span>Indítsd el most</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Free SMP Plan */}
                        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-green-500 to-lime-500 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-white">
                            <div className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Népszerű
                            </div>

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Ingyenes SMP</h3>
                                <div className="text-5xl font-bold mb-2">0 Ft</div>
                                <p className="text-green-100">Fejlettebb funkciók tartalomkészítőknek</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Minden az ingyenes csomagból",
                                    "Akár 50 játékos",
                                    "Fejlett pluginok",
                                    "Prioritás Magyarországi szerverek",
                                    "Fokozott teljesítmény",
                                    "Dedikált támogatási csatorna"
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/20">
                                <div className="flex items-start space-x-3">
                                    <Video className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-yellow-100 text-sm">Videó követelmény</p>
                                        <p className="text-green-100 text-sm">Tartalmazza a "VoxelHost" szót a szerver videóidban, hogy jogosult legyél erre a csomagra</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowLogin(true)}
                                className="w-full bg-white text-green-600 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <span>Indítsd el az SMP-t</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                A <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">Minecraft közösségnek</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                A VoxelHostot Minecraft rajongók hozták létre, akik értik, milyen frusztrálóak a drága hosting szolgáltatások.
                            </p>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Küldetésünk egyszerű: teljesen ingyenes, megbízható Minecraft szerver hosting, ami felveszi a versenyt a prémium szolgáltatásokkal.
                            </p>
                            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-900/30 to-lime-900/30 border border-green-700/30">
                                <div className="text-3xl font-bold text-green-400">99,9%</div>
                                <div className="text-gray-300">Elérhetőség</div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 rounded-3xl blur-xl opacity-20"></div>
                            <div className="relative bg-gradient-to-br from-green-500 to-lime-500 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Miért vagyunk mások</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Teljesen ingyenes - nincs szükség bankkártyára",
                                        "Azonnali szerver indítás másodpercek alatt",
                                        "Teljes adminisztrációs panel hozzáférés",
                                        "Automatikus mentések"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-lime-200" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="py-20 bg-gradient-to-r from-green-600 via-lime-500 to-green-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Készen állsz a szervered elindítására?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Csatlakozz azokhoz a játékosokhoz, akik a VoxelHostot választották Minecraft szervereikhez. Beállítás kevesebb mint 2 perc alatt.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setShowLogin(true)}
                            className="group bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
                        >
                            <span>Kezdd a szerveredet MA</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <a
                            href="https://docs.voxelhost.hu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <span>Dokumentáció megtekintése</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-lg font-bold mb-4">VoxelHost</h4>
                        <p className="text-gray-400">Ingyenes Minecraft szerver hosting, gyors, stabil és megbízható. Nincsenek rejtett költségek.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Navigáció</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#features" className="hover:text-green-400 transition-colors">Funkciók</a></li>
                            <li><a href="#plans" className="hover:text-green-400 transition-colors">Csomagok</a></li>
                            <li><a href="#about" className="hover:text-green-400 transition-colors">Rólunk</a></li>
                            <li><a href="https://docs.voxelhost.hu" target="_blank" className="hover:text-green-400 transition-colors">Dokumentáció</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Kapcsolat</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: support@voxelhost.hu</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Közösség</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-green-400 transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-12 text-gray-500 text-sm">
                    &copy; 2025 VoxelHost. Minden jog fenntartva.
                </div>
            </footer>

            {/* Login Modal */}
            <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        </div>
    );
}

export default App;
