import { personalInfo, skills, experiences, education } from '../../about/data';
import { t } from '@/lib/i18n';
import { SupportedLanguage } from '@/locales/types';

export default async function About({ params }: { params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params;
  const locale = (resolvedParams?.locale as SupportedLanguage) || 'en-US';
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{t(locale, 'about.title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          {/* Profile Card */}
          <div className="tech-card mb-6 gradient-border">
            <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10"></div>
            <div className="relative z-10">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center border-2 border-[var(--card-background)] shadow-lg">
                <span className="text-4xl font-bold text-white">{personalInfo.initials}</span>
              </div>
              <h2 className="text-xl font-semibold text-center mb-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">{personalInfo.name}</h2>
              <p className="text-[var(--primary-color)] text-center mb-4 font-medium">{personalInfo.title}</p>
              <div className="flex justify-center space-x-6">
                {personalInfo.socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    className="text-[var(--text-color)]/70 hover:text-[var(--primary-color)] transition-all duration-300 flex items-center gap-1"
                  >
                    <span className="text-[var(--primary-color)]">✦</span> {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Card */}
          <div className="tech-card">
            <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
              <span className="text-[var(--primary-color)] text-xl">⚡</span> 
              {t(locale, 'about.profile.technicalSkills')}
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-[var(--text-color)]">{skill.name}</span>
                    <span className="text-sm text-[var(--primary-color)]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[var(--border-color)] rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          {/* Biography */}
          <div className="tech-card mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-[var(--primary-color)]">📖</span> 
              {t(locale, 'about.sections.biography')}
            </h2>
            <div className="space-y-4 text-[var(--text-color)]/90">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Experience */}
          <div className="tech-card mb-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-[var(--primary-color)]">💼</span> 
              {t(locale, 'about.sections.workExperience')}
            </h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-[var(--border-color)] before:absolute before:top-0 before:left-[-9px] before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-br before:from-[var(--primary-color)] before:to-[var(--secondary-color)] before:border-2 before:border-[var(--card-background)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">{exp.title}</h3>
                    <span className="text-[var(--primary-color)] text-sm font-medium">{exp.period}</span>
                  </div>
                  <p className="text-[var(--primary-color)] mb-3 font-medium">{exp.company}</p>
                  <ul className="space-y-2 text-[var(--text-color)]/80">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[var(--primary-color)] mt-1">▹</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className="tech-card">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-[var(--primary-color)]">🎓</span> 
              {t(locale, 'about.sections.education')}
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="relative pl-8 border-l-2 border-[var(--border-color)] before:absolute before:top-0 before:left-[-9px] before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-br before:from-[var(--primary-color)] before:to-[var(--secondary-color)] before:border-2 before:border-[var(--card-background)]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">{edu.degree}</h3>
                  <span className="text-[var(--primary-color)] text-sm font-medium">{edu.period}</span>
                </div>
                <p className="text-[var(--primary-color)] font-medium">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
