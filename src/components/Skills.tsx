import {
  SiReact, SiTypescript, SiPython,
  SiDocker, SiKubernetes, SiFastapi,
  SiRedis,
  SiTerraform,
} from 'react-icons/si';
import { FaAws, FaGoogle } from 'react-icons/fa';
import { VscTerminalBash } from 'react-icons/vsc';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineSecurity, MdOutlinePolicy } from 'react-icons/md';
import { BsShieldLock, BsDatabaseLock, BsLock } from 'react-icons/bs';
import { FiKey, FiShield } from 'react-icons/fi';
import { LangSmith, Langfuse, HuggingFace } from '@lobehub/icons';
import elasticLogo from '../assets/elasticsearch.svg';
import langchainLogo from '../assets/langchain-logo.png';
import mcpLogo from '../assets/mcp-logo.png';
import googleAdkLogo from '../assets/google-adk-logo.png';
import fastmcpLogo from '../assets/fastmcp-logo.png';
import a2aLogo from '../assets/a2a-logo.svg';
import ollamaLogo from '../assets/ollama.svg';
import llamaCppLogo from '../assets/llama-cpp-logo.svg';
import deepevalLogo from '../assets/deepeval-logo.png';
import postgresqlLogo from '../assets/postgresql-logo.png';
import mongodbLogo from '../assets/mongodb.svg';
import linuxLogo from '../assets/linux-logo.svg';
import jenkinsLogo from '../assets/jenkins-logo.svg';
import sonarqubeLogo from '../assets/sonarqube-logo.svg';
import opensearchLogo from '../assets/opensearch-logo.png';
import azureIcon from '../assets/azure-icon.svg';
import gitOpsLogo from '../assets/git-icon-logo.svg';
import kibanaSvg from '../assets/kibana.svg';
import logstashSvg from '../assets/logstash.svg';
import beatsLogo from '../assets/elastic-beats.svg';
import podmanLogo from '../assets/podmanio-icon.svg';
import SpotlightCard from './SpotlightCard';
import BorderGlow from './BorderGlow';

type Skill = {
  title: string;
  href?: string;
  node?: React.ReactNode;
};

type SkillCategory = {
  label: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    label: 'Agentic AI Frameworks & LLM Tools',
    skills: [
      { node: <img src={langchainLogo} alt="LangGraph" style={{ width: 32, height: 32 }} />, title: 'LangGraph', href: 'https://www.langchain.com/langgraph' },
      { node: <img src={langchainLogo} alt="LangChain" style={{ width: 32, height: 32 }} />, title: 'LangChain', href: 'https://www.langchain.com/langchain' },
      { node: <img src={langchainLogo} alt="DeepAgents" style={{ width: 32, height: 32 }} />, title: 'DeepAgents', href: 'https://www.langchain.com/deep-agents' },
      { node: <img src={googleAdkLogo} alt="Google ADK" style={{ width: 32, height: 32 }} />, title: 'Google ADK', href: 'https://cloud.google.com/generative-ai-agent-builder' },
      { node: <img src={a2aLogo} alt="A2A" style={{ width: 32, height: 32 }} />, title: 'A2A protocol', href: 'https://a2a-protocol.org/latest/' },
      { node: <img src={mcpLogo} alt="MCP" style={{ width: 32, height: 32 }} />, title: 'MCP', href: 'https://modelcontextprotocol.io' },
      { node: <img src={fastmcpLogo} alt="FastMCP" style={{ width: 32, height: 32 }} />, title: 'FastMCP', href: 'https://gofastmcp.com/getting-started/welcome' },
      { node: <HuggingFace size={32} />, title: 'Hugging Face', href: 'https://huggingface.co' },
      { node: <img src={ollamaLogo} alt="Ollama" style={{ width: 32, height: 32 }} />, title: 'Ollama', href: 'https://ollama.com' },
      { node: <img src={llamaCppLogo} alt="llama.cpp" style={{ width: 32, height: 32 }} />, title: 'llama.cpp', href: 'https://github.com/ggerganov/llama.cpp' },
      { node: <HiOutlineLightBulb color="#F59E0B" />, title: 'Prompt Engineering' },
    ],
  },
  {
    label: 'AI Observability & Eval',
    skills: [
      { node: <Langfuse size={32} />, title: 'LangFuse', href: 'https://langfuse.com' },
      { node: <LangSmith size={32} />, title: 'LangSmith', href: 'https://www.langchain.com/langsmith-platform' },
      { node: <img src={deepevalLogo} alt="DeepEval" style={{ width: 32, height: 32 }} />, title: 'DeepEval', href: 'https://github.com/confident-ai/deepeval' },
    ],
  },
  {
    label: 'RAG & Vector Systems',
    skills: [
      { node: <img src={elasticLogo} alt="Elasticsearch" style={{ width: 32, height: 32 }} />, title: 'Elasticsearch', href: 'https://www.elastic.co' },
      { node: <img src={opensearchLogo} alt="OpenSearch" style={{ width: 32, height: 32 }} />, title: 'OpenSearch', href: 'https://opensearch.org' },
      { node: <img src={postgresqlLogo} alt="pgVector" style={{ width: 32, height: 32 }} />, title: 'pgVector', href: 'https://github.com/pgvector/pgvector' },
    ],
  },
  {
    label: 'Database & Cache',
    skills: [
      { node: <img src={postgresqlLogo} alt="PostgreSQL" style={{ width: 32, height: 32 }} />, title: 'PostgreSQL', href: 'https://www.postgresql.org' },
      { node: <img src={mongodbLogo} alt="MongoDB" style={{ width: 32, height: 32 }} />, title: 'MongoDB', href: 'https://www.mongodb.com' },
      { node: <SiRedis color="#DC382D" />, title: 'Redis', href: 'https://redis.io' },
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    skills: [
      { node: <FaAws color="#FF9900" />, title: 'AWS', href: 'https://aws.amazon.com' },
      { node: <FaGoogle color="#4285F4" />, title: 'GCP', href: 'https://cloud.google.com' },
      { node: <img src={azureIcon} alt="Azure" style={{ width: 32, height: 32 }} />, title: 'Azure', href: 'https://azure.microsoft.com' },
      { node: <img src={linuxLogo} alt="Linux" style={{ width: 32, height: 32 }} />, title: 'Linux' },
    ],
  },
  {
    label: 'DevOps & CI/CD',
    skills: [
      { node: <SiDocker color="#2496ED" />, title: 'Docker', href: 'https://www.docker.com' },
      { node: <img src={podmanLogo} alt="Podman" style={{ width: 32, height: 32 }} />, title: 'Podman', href: 'https://podman.io' },
      { node: <SiKubernetes color="#326CE5" />, title: 'Kubernetes', href: 'https://kubernetes.io' },
      { node: <img src={jenkinsLogo} alt="Jenkins" style={{ width: 32, height: 32 }} />, title: 'Jenkins', href: 'https://www.jenkins.io' },
      { node: <img src={azureIcon} alt="Azure DevOps" style={{ width: 32, height: 32 }} />, title: 'Azure DevOps', href: 'https://azure.microsoft.com/en-us/services/devops' },
      { node: <img src={gitOpsLogo} alt="GitOps" style={{ width: 32, height: 32 }} />, title: 'GitOps' },
      { node: <img src={sonarqubeLogo} alt="SonarQube" style={{ width: 32, height: 32 }} />, title: 'SonarQube', href: 'https://www.sonarsource.com/products/sonarqube' },
      { node: <SiTerraform color="#326CE5" />, title: 'Terraform', href: 'https://www.terraform.io' },
      { node: <img src={'https://www.rancher.com/assets/img/logos/rancher-logo-cow-blue.svg'} alt="Rancher" style={{ width: 32, height: 32 }} />, title: 'Rancher', href: 'https://www.rancher.com' }
    ],
  },
  {
    label: 'Security & Auth',
    skills: [
      { node: <MdOutlineSecurity color="#3B82F6" />, title: 'OAuth' },
      { node: <FiKey color="#8B5CF6" />, title: 'JWT' },
      { node: <MdOutlinePolicy color="#6366F1" />, title: 'RBAC' },
      { node: <FiShield color="#10B981" />, title: 'IAM' },
      { node: <BsShieldLock color="#EF4444" />, title: 'TLS/HTTPS' },
      { node: <BsLock color="#F59E0B" />, title: 'SSL' },
      { node: <BsDatabaseLock color="#EC4899" />, title: 'Secrets Management' },
    ],
  },
  {
    label: 'Observability',
    skills: [
      { node: <img src={kibanaSvg} alt="Kibana" style={{ width: 32, height: 32 }} />, title: 'Kibana', href: 'https://www.elastic.co/kibana' },
      { node: <img src={logstashSvg} alt="Logstash" style={{ width: 32, height: 32 }} />, title: 'Logstash', href: 'https://www.elastic.co/logstash' },
      { node: <img src={beatsLogo} alt="Beats" style={{ width: 32, height: 32 }} />, title: 'Beats', href: 'https://www.elastic.co/beats' },
    ],
  },
  {
    label: 'Programming',
    skills: [
      { node: <SiPython color="#3776AB" />, title: 'Python', href: 'https://www.python.org' },
      { node: <SiTypescript color="#3178C6" />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
      { node: <VscTerminalBash color="#4EAA25" />, title: 'Bash' },
      { node: <SiReact color="#61DAFB" />, title: 'React', href: 'https://react.dev' },
      { node: <SiFastapi color="#009688" />, title: 'FastAPI', href: 'https://fastapi.tiangolo.com' },
    ],
  },
];

const SkillCard = ({ tech }: { tech: Skill }) => (
  <BorderGlow className="skill-card-wrapper" borderRadius={0}>
    <SpotlightCard borderColor="transparent" backgroundColor="transparent">
      <a
        href={tech.href || "#"}
        target={tech.href ? "_blank" : undefined}
        rel={tech.href ? "noreferrer" : undefined}
        title={tech.title}
        className="skill-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem 0.5rem',
          fontSize: '2rem',
          cursor: tech.href ? 'pointer' : 'default',
          textDecoration: 'none',
          height: '100%',
        }}
      >
        {tech.node}
        <span style={{
          fontSize: '0.6rem',
          marginTop: '0.4rem',
          color: 'var(--text)',
          fontWeight: 600,
          textAlign: 'center',
          lineHeight: 1.2,
          wordBreak: 'break-word'
        }}>
          {tech.title}
        </span>
      </a>
    </SpotlightCard>
  </BorderGlow>
);

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h3 className="section-label">Skills</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {skillCategories.map((category) => (
          <div key={category.label}>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '1rem',
            }}>
              {category.label}
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(75px, 1fr))',
              gap: '1rem',
            }}>
              {category.skills.map((tech) => (
                <SkillCard key={tech.title} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}