/**
 * SynapseFlow AI — Biomorphic Adaptive UI/UX & Cognitive Load Engine
 * Interactive Kinetic Controller, Force-Directed Graph & Real-Time Topology Synthesizer
 */

// State Management
const state = {
    intrinsic: 0.30,
    extraneous: 0.25,
    chunks: 4,
    stress: 0.20,
    activePersona: 'exploratory',
    autoStreaming: false,
    
    // Kinetic Fitts Tracking
    lastTargetClick: Date.now(),
    lastTargetPos: { x: 200, y: 90 },
    currentFittsId: 2.41,
    currentMT: 312,
    
    // Computed Telemetry
    totalCognitiveLoad: 0.28,
    topologyMode: 'SPATIAL_EXPLORATORY_CANVAS'
};

// Persona Presets
const PERSONAS = {
    exploratory: {
        intrinsic: 0.25,
        extraneous: 0.15,
        chunks: 4,
        stress: 0.10,
        className: 'topology-exploratory',
        mode: 'SPATIAL_EXPLORATORY_CANVAS',
        stateLabel: 'FLOW STATE (ZEN)'
    },
    trading: {
        intrinsic: 0.55,
        extraneous: 0.40,
        chunks: 7,
        stress: 0.45,
        className: 'topology-trading',
        mode: 'BALANCED_FLOW_GRID',
        stateLabel: 'ELEVATED (MARKET FOCUS)'
    },
    atc: {
        intrinsic: 0.70,
        extraneous: 0.30,
        chunks: 8,
        stress: 0.65,
        className: 'topology-atc',
        mode: 'STREAMLINED_PROGRESSIVE',
        stateLabel: 'HIGH ALERT (AIRSPACE VECTOR)'
    },
    trauma: {
        intrinsic: 0.88,
        extraneous: 0.70,
        chunks: 11,
        stress: 0.92,
        className: 'topology-tunnel',
        mode: 'CRITICAL_TUNNEL_FOCUS',
        stateLabel: 'SEVERE CRISIS (TUNNEL FOCUS)'
    }
};

// DOM Elements
const elements = {
    sliderIntrinsic: document.getElementById('sliderIntrinsic'),
    sliderExtraneous: document.getElementById('sliderExtraneous'),
    sliderMemoryChunks: document.getElementById('sliderMemoryChunks'),
    sliderStress: document.getElementById('sliderStress'),
    
    valIntrinsic: document.getElementById('valIntrinsic'),
    valExtraneous: document.getElementById('valExtraneous'),
    valMemoryChunks: document.getElementById('valMemoryChunks'),
    valStress: document.getElementById('valStress'),
    
    hudOperatorState: document.getElementById('hudOperatorState'),
    hudCognitiveLoad: document.getElementById('hudCognitiveLoad'),
    hudTopology: document.getElementById('hudTopology'),
    hudFittsId: document.getElementById('hudFittsId'),
    topologyBadge: document.getElementById('topologyBadge'),
    
    statNeuralFlux: document.getElementById('statNeuralFlux'),
    statReactionTime: document.getElementById('statReactionTime'),
    statFittsEfficiency: document.getElementById('statFittsEfficiency'),
    pulseFill: document.getElementById('pulseFill'),
    
    swIntrinsic: document.getElementById('swIntrinsic'),
    swExtraneous: document.getElementById('swExtraneous'),
    swGermane: document.getElementById('swGermane'),
    
    lblChoices: document.getElementById('lblChoices'),
    lblDecisionLatency: document.getElementById('lblDecisionLatency'),
    cliSnippet: document.getElementById('cliSnippet'),
    btnCopyCLI: document.getElementById('btnCopyCLI'),
    btnRecalculate: document.getElementById('btnRecalculate'),
    btnAutoSimulate: document.getElementById('btnAutoSimulate'),
    
    fittsContainer: document.getElementById('fittsContainer'),
    fittsCanvas: document.getElementById('fittsCanvas'),
    fittsTarget: document.getElementById('fittsTarget'),
    fStatD: document.getElementById('fStatD'),
    fStatW: document.getElementById('fStatW'),
    fStatID: document.getElementById('fStatID'),
    fStatMT: document.getElementById('fStatMT'),
    fStatIP: document.getElementById('fStatIP'),
    
    frictionGraphCanvas: document.getElementById('frictionGraphCanvas')
};

// ============================================================================
// Mathematical Engine
// ============================================================================
function computeCognitiveMetrics() {
    const Li = state.intrinsic;
    const Le = state.extraneous;
    const chunks = state.chunks;
    const S = state.stress;
    
    // Sweller working memory saturation (Miller 7 +/- 2)
    const wmSaturation = Math.min(1.0, chunks / 9.0);
    
    // Total Cognitive Load Model: L_total = 0.45*Li + 0.35*Le + 0.20*(chunks/9) + 0.15*S
    let L_total = (0.40 * Li) + (0.35 * Le) + (0.15 * wmSaturation) + (0.10 * S);
    L_total = Math.max(0.05, Math.min(1.0, L_total));
    
    // Dynamic Germane Capacity
    const germaneCapacity = Math.max(0.05, 1.0 - L_total);
    
    // Determine Biomorphic Topology Mode
    let modeClass = 'topology-exploratory';
    let modeName = 'SPATIAL_EXPLORATORY_CANVAS';
    let stateTitle = 'FLOW STATE (ZEN)';
    
    if (L_total > 0.72 || S > 0.75) {
        modeClass = 'topology-tunnel';
        modeName = 'CRITICAL_TUNNEL_FOCUS';
        stateTitle = 'CRITICAL OVERLOAD (TUNNEL MODE)';
    } else if (L_total > 0.52) {
        modeClass = 'topology-atc';
        modeName = 'STREAMLINED_PROGRESSIVE';
        stateTitle = 'HIGH FOCUS (SYSTEM ALERT)';
    } else if (L_total > 0.35) {
        modeClass = 'topology-trading';
        modeName = 'BALANCED_FLOW_GRID';
        stateTitle = 'BALANCED FLOW (ACTIVE)';
    }
    
    // Hick-Hyman Decision Time: T = 150 + 120 * log2(n + 1)
    const activeChoices = Math.max(2, Math.round(10 * (1.1 - L_total)));
    const decisionLatency = Math.round(150 + 120 * Math.log2(activeChoices + 1));
    
    // Expected Motor Reaction Time
    const expectedRT = Math.round(200 + 180 * L_total + 100 * S);
    
    // Update State
    state.totalCognitiveLoad = L_total;
    state.topologyMode = modeName;
    
    // Apply DOM Updates
    document.body.className = modeClass;
    elements.hudCognitiveLoad.innerText = L_total.toFixed(2);
    elements.hudTopology.innerText = modeName.replace('_CANVAS', '');
    elements.hudOperatorState.innerText = stateTitle;
    elements.topologyBadge.innerText = modeName;
    
    elements.statNeuralFlux.innerText = `${Math.round(1800 * (1 - L_total * 0.4))} ops/s`;
    elements.statReactionTime.innerText = `${expectedRT} ms`;
    elements.statFittsEfficiency.innerText = `${(100 - L_total * 22).toFixed(1)}%`;
    elements.pulseFill.style.width = `${Math.round(L_total * 100)}%`;
    
    elements.swIntrinsic.style.width = `${Math.round(Li * 100)}%`;
    elements.swExtraneous.style.width = `${Math.round(Le * 100)}%`;
    elements.swGermane.style.width = `${Math.round(germaneCapacity * 100)}%`;
    
    elements.lblChoices.innerText = `${activeChoices} vectors`;
    elements.lblDecisionLatency.innerText = `${decisionLatency} ms`;
    
    elements.cliSnippet.innerText = `python3 synapseflow/cli/main.py morph --intrinsic ${Li.toFixed(2)} --extraneous ${Le.toFixed(2)} --chunks ${chunks} --stress ${S.toFixed(2)}`;
}

// ============================================================================
// Fitts' Law Kinetic Sandbox
// ============================================================================
function initFittsSandbox() {
    const canvas = elements.fittsCanvas;
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = elements.fittsContainer.clientWidth;
        canvas.height = elements.fittsContainer.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    function spawnTarget() {
        const containerW = elements.fittsContainer.clientWidth;
        const containerH = elements.fittsContainer.clientHeight;
        
        // Dynamically scale target width W inversely with stress / cognitive load
        // Under high load, expand hitbox to avoid motor errors
        const baseW = Math.max(32, Math.round(52 * (1.0 + (state.stress * 0.5))));
        const padding = baseW + 10;
        
        const nextX = Math.round(padding + Math.random() * (containerW - padding * 2));
        const nextY = Math.round(padding + Math.random() * (containerH - padding * 2));
        
        // Calculate Distance D
        const dx = nextX - state.lastTargetPos.x;
        const dy = nextY - state.lastTargetPos.y;
        const D = Math.max(10, Math.sqrt(dx * dx + dy * dy));
        
        // Fitts' Index of Difficulty: ID = log2(2D / W)
        const ID = Math.max(0.1, Math.log2((2 * D) / baseW));
        
        elements.fittsTarget.style.width = `${baseW}px`;
        elements.fittsTarget.style.height = `${baseW}px`;
        elements.fittsTarget.style.left = `${nextX}px`;
        elements.fittsTarget.style.top = `${nextY}px`;
        
        // Draw kinetic trajectory trail on canvas
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(state.lastTargetPos.x, state.lastTargetPos.y);
        ctx.lineTo(nextX, nextY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Fade out canvas trails gradually
        setTimeout(() => {
            ctx.fillStyle = 'rgba(6, 9, 19, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }, 800);
        
        return { D, W: baseW, ID, x: nextX, y: nextY };
    }
    
    elements.fittsTarget.addEventListener('click', (e) => {
        const now = Date.now();
        const MT = Math.max(80, now - state.lastTargetClick);
        state.lastTargetClick = now;
        
        const nextTarget = spawnTarget();
        state.lastTargetPos = { x: nextTarget.x, y: nextTarget.y };
        
        // Throughput (Index of Performance): IP = ID / (MT in seconds)
        const MT_sec = MT / 1000.0;
        const IP = nextTarget.ID / MT_sec;
        
        elements.fStatD.innerText = `${Math.round(nextTarget.D)} px`;
        elements.fStatW.innerText = `${nextTarget.W} px`;
        elements.fStatID.innerText = `${nextTarget.ID.toFixed(2)} bits`;
        elements.fStatMT.innerText = `${MT} ms`;
        elements.fStatIP.innerText = `${IP.toFixed(2)} bits/s`;
        
        elements.hudFittsId.innerText = `${nextTarget.ID.toFixed(2)} bits`;
    });
    
    // Initial Spawn
    spawnTarget();
}

// ============================================================================
// Force-Directed Cognitive Friction Graph Animation
// ============================================================================
function initForceDirectedGraph() {
    const canvas = elements.frictionGraphCanvas;
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    // Nodes
    const nodes = [
        { id: 'vital', name: 'Primary Vital', x: 80, y: 70, vx: 0, vy: 0, type: 'pri', radius: 10 },
        { id: 'sweller', name: 'Sweller Model', x: 160, y: 110, vx: 0, vy: 0, type: 'sec', radius: 8 },
        { id: 'fitts', name: 'Fitts Kinetic', x: 220, y: 60, vx: 0, vy: 0, type: 'sec', radius: 8 },
        { id: 'clutter1', name: 'Sensor Drift', x: 280, y: 140, vx: 0, vy: 0, type: 'ext', radius: 6 },
        { id: 'clutter2', name: 'Log Stream', x: 120, y: 150, vx: 0, vy: 0, type: 'ext', radius: 6 }
    ];
    
    const links = [
        { source: 0, target: 1 },
        { source: 0, target: 2 },
        { source: 1, target: 3 },
        { source: 2, target: 4 },
        { source: 1, target: 2 }
    ];
    
    let animFrame;
    function renderGraph() {
        ctx.fillStyle = 'rgba(6, 9, 19, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Physics update
        for (let i = 0; i < nodes.length; i++) {
            const n = nodes[i];
            
            // In tunnel mode, repel or hide extraneous nodes
            if (state.totalCognitiveLoad > 0.70 && n.type === 'ext') {
                n.x += (canvas.width + 100 - n.x) * 0.05;
                continue;
            }
            
            // Gentle orbital float
            n.x += Math.sin(Date.now() * 0.002 + i) * 0.4;
            n.y += Math.cos(Date.now() * 0.002 + i) * 0.4;
            
            // Bounds check
            n.x = Math.max(20, Math.min(canvas.width - 20, n.x));
            n.y = Math.max(20, Math.min(canvas.height - 20, n.y));
        }
        
        // Draw Links
        for (let link of links) {
            const s = nodes[link.source];
            const t = nodes[link.target];
            
            if (state.totalCognitiveLoad > 0.70 && (s.type === 'ext' || t.type === 'ext')) continue;
            
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(t.x, t.y);
            ctx.stroke();
        }
        
        // Draw Nodes
        for (let n of nodes) {
            if (state.totalCognitiveLoad > 0.70 && n.type === 'ext') continue;
            
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
            
            if (n.type === 'pri') {
                ctx.fillStyle = '#00f0ff';
                ctx.shadowColor = '#00f0ff';
                ctx.shadowBlur = 10;
            } else if (n.type === 'sec') {
                ctx.fillStyle = '#a855f7';
                ctx.shadowColor = '#a855f7';
                ctx.shadowBlur = 6;
            } else {
                ctx.fillStyle = '#f43f5e';
                ctx.shadowColor = '#f43f5e';
                ctx.shadowBlur = 4;
            }
            
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Label
            ctx.fillStyle = '#94a3b8';
            ctx.font = '9px JetBrains Mono';
            ctx.fillText(n.name, n.x + 12, n.y + 3);
        }
        
        animFrame = requestAnimationFrame(renderGraph);
    }
    
    renderGraph();
}

// ============================================================================
// Event Listeners & Persona Switching
// ============================================================================
function setupEventListeners() {
    // Slider Listeners
    elements.sliderIntrinsic.addEventListener('input', (e) => {
        state.intrinsic = parseFloat(e.target.value);
        elements.valIntrinsic.innerText = state.intrinsic.toFixed(2);
        computeCognitiveMetrics();
    });
    
    elements.sliderExtraneous.addEventListener('input', (e) => {
        state.extraneous = parseFloat(e.target.value);
        elements.valExtraneous.innerText = state.extraneous.toFixed(2);
        computeCognitiveMetrics();
    });
    
    elements.sliderMemoryChunks.addEventListener('input', (e) => {
        state.chunks = parseInt(e.target.value);
        elements.valMemoryChunks.innerText = `${state.chunks} chunks`;
        computeCognitiveMetrics();
    });
    
    elements.sliderStress.addEventListener('input', (e) => {
        state.stress = parseFloat(e.target.value);
        elements.valStress.innerText = state.stress.toFixed(2);
        computeCognitiveMetrics();
    });
    
    // Persona Switchboard
    document.querySelectorAll('.persona-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.persona-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const pKey = btn.getAttribute('data-persona');
            const p = PERSONAS[pKey];
            if (p) {
                state.intrinsic = p.intrinsic;
                state.extraneous = p.extraneous;
                state.chunks = p.chunks;
                state.stress = p.stress;
                state.activePersona = pKey;
                
                elements.sliderIntrinsic.value = p.intrinsic;
                elements.sliderExtraneous.value = p.extraneous;
                elements.sliderMemoryChunks.value = p.chunks;
                elements.sliderStress.value = p.stress;
                
                elements.valIntrinsic.innerText = p.intrinsic.toFixed(2);
                elements.valExtraneous.innerText = p.extraneous.toFixed(2);
                elements.valMemoryChunks.innerText = `${p.chunks} chunks`;
                elements.valStress.innerText = p.stress.toFixed(2);
                
                computeCognitiveMetrics();
            }
        });
    });
    
    // Recalculate Button
    elements.btnRecalculate.addEventListener('click', computeCognitiveMetrics);
    
    // Copy CLI Button
    elements.btnCopyCLI.addEventListener('click', () => {
        navigator.clipboard.writeText(elements.cliSnippet.innerText);
        elements.btnCopyCLI.innerText = 'COPIED!';
        setTimeout(() => { elements.btnCopyCLI.innerText = 'COPY'; }, 1500);
    });
    
    // Real-Time Simulation Stream
    let streamTimer = null;
    elements.btnAutoSimulate.addEventListener('click', () => {
        state.autoStreaming = !state.autoStreaming;
        if (state.autoStreaming) {
            elements.btnAutoSimulate.innerText = '⏹ PAUSE STREAM';
            elements.btnAutoSimulate.style.borderColor = '#00f0ff';
            elements.btnAutoSimulate.style.color = '#00f0ff';
            
            streamTimer = setInterval(() => {
                const deltaStress = (Math.random() - 0.48) * 0.08;
                state.stress = Math.max(0.05, Math.min(0.98, state.stress + deltaStress));
                elements.sliderStress.value = state.stress.toFixed(2);
                elements.valStress.innerText = state.stress.toFixed(2);
                computeCognitiveMetrics();
            }, 600);
        } else {
            elements.btnAutoSimulate.innerText = '▶ REAL-TIME STREAM';
            elements.btnAutoSimulate.style.borderColor = '';
            elements.btnAutoSimulate.style.color = '';
            clearInterval(streamTimer);
        }
    });
}

// Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    initFittsSandbox();
    initForceDirectedGraph();
    computeCognitiveMetrics();
});
