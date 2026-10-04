#!/usr/bin/env python3
"""
SynapseFlow AI - Tactical CLI
Cognitive Workload Telemetry & Biomorphic UI Mutation Engine.
"""

import sys
import os
import argparse
import json

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))

from synapseflow.engine.cognitive_load_engine import CognitiveLoadEngine
from synapseflow.engine.biomorphic_morph_engine import BiomorphicMorphEngine


def print_banner():
    print("=" * 72)
    print("  🧠 SYNAPSEFLOW AI - Cognitive Workload Telemetry & Biomorphic UI Engine")
    print("  Engineered for Hyperbloom October — Human-Computer Interaction Redesign")
    print("=" * 72)


def handle_profile(args):
    print_banner()
    load_engine = CognitiveLoadEngine()
    archetypes = load_engine.get_precalibrated_archetypes()

    if args.archetype in archetypes:
        inp = archetypes[args.archetype]["inputs"]
        label = archetypes[args.archetype]["label"]
        active_chunks = inp["active_chunks"]
        density = inp["visual_element_density"]
        entropy = inp["interaction_entropy_bits"]
        switching = inp["task_switching_frequency_hz"]
        distractors = inp["sensory_distractor_count"]
    else:
        label = "Custom Telemetry Profile"
        active_chunks = args.chunks
        density = args.density
        entropy = args.entropy
        switching = args.switching
        distractors = args.distractors

    res = load_engine.evaluate_cognitive_friction_index(
        active_chunks=active_chunks,
        visual_element_density=density,
        interaction_entropy_bits=entropy,
        task_switching_frequency_hz=switching,
        sensory_distractor_count=distractors
    )

    if args.json:
        print(json.dumps({"profile": label, "result": res}, indent=2))
        return

    print(f"\n📊 OPERATIONAL PROFILE: {label}")
    print(f"⚡ COGNITIVE FRICTION INDEX (CFI): {res['cognitive_friction_index']:.1f}/100 [{res['state']}]")
    print(f"🧠 WORKING MEMORY SATURATION    : {res['working_memory_saturation_pct']:.1f}%")
    print("\n--- Sweller Cognitive Load Tri-Partite Model ---")
    print(f"  • Intrinsic Task Load : {res['sweller_breakdown']['intrinsic_load_pct']}%")
    print(f"  • Extraneous Friction : {res['sweller_breakdown']['extraneous_load_pct']}%")
    print(f"  • Germane Schema Flow : {res['sweller_breakdown']['germane_load_pct']}%")
    print(f"\n💡 RECOMMENDATION: {res['clinical_recommendation']}")


def handle_morph(args):
    print_banner()
    load_engine = CognitiveLoadEngine()
    morph_engine = BiomorphicMorphEngine()

    if args.archetype:
        archetypes = load_engine.get_precalibrated_archetypes()
        inp = archetypes[args.archetype]["inputs"]
        profile_res = load_engine.evaluate_cognitive_friction_index(
            active_chunks=inp["active_chunks"],
            visual_element_density=inp["visual_element_density"],
            interaction_entropy_bits=inp["interaction_entropy_bits"],
            task_switching_frequency_hz=inp["task_switching_frequency_hz"],
            sensory_distractor_count=inp["sensory_distractor_count"]
        )
        cfi = profile_res["cognitive_friction_index"]
    else:
        cfi = args.cfi

    tokens = morph_engine.synthesize_ui_mutation_tokens(
        cognitive_friction_index=cfi,
        user_fatigue_score=args.fatigue
    )

    if args.json:
        print(json.dumps(tokens, indent=2))
        return

    print(f"\n🧬 BIOMORPHIC UI MUTATION TOPOLOGY: {tokens['topology_state']}")
    print(f"🛡️  Effective Cognitive Load: {tokens['effective_load_index']}/100")
    print("\n--- Active CSS Custom Property Tokens ---")
    for k, v in tokens["css_tokens"].items():
        print(f"  • {k:<30}: {v}")

    print("\n--- Viewport Layout Directives ---")
    for d in tokens["layout_directives"]:
        print(f"  ✓ {d}")


def main():
    parser = argparse.ArgumentParser(description="SynapseFlow AI - Cognitive Telemetry CLI")
    subparsers = parser.add_subparsers(dest="command", help="Subcommand to execute")

    # Profile
    p_prof = subparsers.add_parser("profile", help="Profile cognitive friction of a task/interface")
    p_prof.add_argument("--archetype", default="icu_triage_crisis", choices=["icu_triage_crisis", "air_traffic_conflict", "code_auditor_flow", "casual_data_browse"])
    p_prof.add_argument("--chunks", type=int, default=5, help="Active memory chunks (1-10)")
    p_prof.add_argument("--density", type=int, default=25, help="Visual element density")
    p_prof.add_argument("--entropy", type=float, default=1.5, help="Interaction entropy bits")
    p_prof.add_argument("--switching", type=float, default=0.5, help="Task switching frequency Hz")
    p_prof.add_argument("--distractors", type=int, default=2, help="Sensory distractor count")
    p_prof.add_argument("--json", action="store_true", help="Output raw JSON")

    # Morph
    p_morph = subparsers.add_parser("morph", help="Synthesize biomorphic CSS tokens")
    p_morph.add_argument("--archetype", default=None, choices=["icu_triage_crisis", "air_traffic_conflict", "code_auditor_flow", "casual_data_browse"])
    p_morph.add_argument("--cfi", type=float, default=65.0, help="Cognitive friction index (0-100)")
    p_morph.add_argument("--fatigue", type=float, default=10.0, help="User fatigue score (0-100)")
    p_morph.add_argument("--json", action="store_true", help="Output raw JSON")

    args = parser.parse_args()
    if not args.command:
        parser.print_help()
        sys.exit(1)

    if args.command == "profile":
        handle_profile(args)
    elif args.command == "morph":
        handle_morph(args)


if __name__ == "__main__":
    main()
