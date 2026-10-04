"""
SynapseFlow AI - Biomorphic Adaptive Interface Mutation Engine
Computes real-time dynamic CSS custom property tokens, viewport layout mutations, and cognitive focus shields.
"""

from typing import Any, Dict, List


class BiomorphicMorphEngine:
    """Calculates responsive UI topological mutations based on Cognitive Friction."""

    def synthesize_ui_mutation_tokens(self, cognitive_friction_index: float, user_fatigue_score: float = 0.0) -> Dict[str, Any]:
        """
        Generates deterministic CSS custom properties and layout topology instructions.
        """
        effective_load = min(100.0, cognitive_friction_index + (user_fatigue_score * 0.25))

        if effective_load >= 75.0:
            # Critical Focus Mode: Radical decluttering, high legibility, tunnel focus
            topology = "CRITICAL_TUNNEL_FOCUS"
            typography_scale = 1.25  # +25% larger type
            target_padding_px = 18   # Fitts' law target expansion
            visible_columns = 1
            peripheral_opacity = 0.0 # Full prune
            animation_duration_ms = 100 # Near-instant response
            theme_mode = "MONOCHROMATIC_SHIELD"
            accent_hue = "#ff4757"   # High priority alert
            bg_darkness = "#05070a"

        elif effective_load >= 60.0:
            # High Friction: Progressive disclosure, collapse secondary sidebars
            topology = "STREAMLINED_PROGRESSIVE"
            typography_scale = 1.10
            target_padding_px = 14
            visible_columns = 2
            peripheral_opacity = 0.35
            animation_duration_ms = 250
            theme_mode = "MUTED_HIGH_CONTRAST"
            accent_hue = "#ffb800"
            bg_darkness = "#090d14"

        elif effective_load >= 35.0:
            # Optimal Flow State: Balanced multi-panel productivity
            topology = "BALANCED_FLOW_GRID"
            typography_scale = 1.00
            target_padding_px = 10
            visible_columns = 3
            peripheral_opacity = 0.85
            animation_duration_ms = 350
            theme_mode = "BIOLUMINESCENT_CYAN"
            accent_hue = "#00e5ff"
            bg_darkness = "#0b1018"

        else:
            # Exploratory Open State: Rich spatial graph, maximum density
            topology = "SPATIAL_EXPLORATORY_CANVAS"
            typography_scale = 0.92
            target_padding_px = 8
            visible_columns = 4
            peripheral_opacity = 1.0
            animation_duration_ms = 450
            theme_mode = "DEEP_CHROMA_MATRIX"
            accent_hue = "#00e699"
            bg_darkness = "#0e1420"

        return {
            "topology_state": topology,
            "effective_load_index": round(effective_load, 1),
            "css_tokens": {
                "--synapse-font-scale": f"{typography_scale:.2f}",
                "--synapse-target-padding": f"{target_padding_px}px",
                "--synapse-peripheral-opacity": f"{peripheral_opacity:.2f}",
                "--synapse-anim-duration": f"{animation_duration_ms}ms",
                "--synapse-accent-color": accent_hue,
                "--synapse-bg-color": bg_darkness,
                "--synapse-visible-columns": str(visible_columns)
            },
            "layout_directives": [
                f"Typography scaled to {typography_scale * 100:.0f}% baseline",
                f"Fitts' button touch targets expanded to {target_padding_px}px hitboxes",
                f"Secondary peripheral visual density clamped to {peripheral_opacity * 100:.0f}%",
                f"Active cognitive theme set to {theme_mode}"
            ]
        }
