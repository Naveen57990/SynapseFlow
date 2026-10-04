#!/usr/bin/env python3
"""
Deterministic Unit Test Suite for SynapseFlow AI
Validates Cognitive Friction Index, Fitts' law calculations, Hick-Hyman latency, and Biomorphic UI Mutations.
Target Execution Time: 0.000s
"""

import sys
import os
import time
import unittest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))

from synapseflow.engine.cognitive_load_engine import CognitiveLoadEngine
from synapseflow.engine.biomorphic_morph_engine import BiomorphicMorphEngine


class TestSynapseFlowEngine(unittest.TestCase):
    """Deterministic validation of SynapseFlow mathematical models."""

    def setUp(self):
        self.load_engine = CognitiveLoadEngine()
        self.morph_engine = BiomorphicMorphEngine()

    def test_fitts_index_of_difficulty(self):
        """Test Fitts' law target acquisition difficulty calculation."""
        # D = 200px, W = 50px -> 2*200 / 50 = 8 -> log2(8) = 3.0 bits
        id_val = self.load_engine.calculate_fitts_index_of_difficulty(200.0, 50.0)
        self.assertAlmostEqual(id_val, 3.0, places=4)

    def test_hick_hyman_decision_time(self):
        """Test Hick-Hyman decision latency scaling."""
        # 3 choices -> log2(3 + 1) = 2.0 -> 200 + 150*2 = 500ms
        t_val = self.load_engine.calculate_hick_hyman_decision_time(3, base_time_ms=200.0, b_constant=150.0)
        self.assertEqual(t_val, 500.0)

    def test_working_memory_saturation_cap(self):
        """Test Working Memory Saturation (Miller's law 7 chunks)."""
        res = self.load_engine.evaluate_cognitive_friction_index(
            active_chunks=7,
            visual_element_density=20,
            interaction_entropy_bits=1.0,
            task_switching_frequency_hz=0.5,
            sensory_distractor_count=1
        )
        self.assertEqual(res["working_memory_saturation_pct"], 100.0)

    def test_cognitive_friction_overload_state(self):
        """Test critical overload detection for ICU crisis scenario."""
        res = self.load_engine.evaluate_cognitive_friction_index(
            active_chunks=9,
            visual_element_density=48,
            interaction_entropy_bits=3.8,
            task_switching_frequency_hz=1.6,
            sensory_distractor_count=6
        )
        self.assertGreaterEqual(res["cognitive_friction_index"], 75.0)
        self.assertEqual(res["state"], "OVERLOAD_CRITICAL")

    def test_cognitive_friction_flow_state(self):
        """Test optimal flow state for deep systems code review."""
        res = self.load_engine.evaluate_cognitive_friction_index(
            active_chunks=4,
            visual_element_density=18,
            interaction_entropy_bits=1.4,
            task_switching_frequency_hz=0.3,
            sensory_distractor_count=1
        )
        self.assertLess(res["cognitive_friction_index"], 60.0)
        self.assertGreaterEqual(res["cognitive_friction_index"], 35.0)
        self.assertEqual(res["state"], "OPTIMAL_FLOW")

    def test_biomorphic_mutation_critical_focus(self):
        """Test that high friction triggers Radical Tunnel Focus tokens."""
        tokens = self.morph_engine.synthesize_ui_mutation_tokens(cognitive_friction_index=82.0)
        self.assertEqual(tokens["topology_state"], "CRITICAL_TUNNEL_FOCUS")
        self.assertEqual(tokens["css_tokens"]["--synapse-font-scale"], "1.25")
        self.assertEqual(tokens["css_tokens"]["--synapse-visible-columns"], "1")
        self.assertEqual(tokens["css_tokens"]["--synapse-peripheral-opacity"], "0.00")

    def test_biomorphic_mutation_exploratory_canvas(self):
        """Test that low friction triggers Spatial Exploratory Canvas tokens."""
        tokens = self.morph_engine.synthesize_ui_mutation_tokens(cognitive_friction_index=22.0)
        self.assertEqual(tokens["topology_state"], "SPATIAL_EXPLORATORY_CANVAS")
        self.assertEqual(tokens["css_tokens"]["--synapse-visible-columns"], "4")
        self.assertEqual(tokens["css_tokens"]["--synapse-peripheral-opacity"], "1.00")

    def test_precalibrated_archetypes_integrity(self):
        """Test that all pre-calibrated operational archetypes load valid inputs."""
        archetypes = self.load_engine.get_precalibrated_archetypes()
        self.assertEqual(len(archetypes), 4)
        self.assertIn("icu_triage_crisis", archetypes)
        self.assertIn("air_traffic_conflict", archetypes)
        self.assertIn("code_auditor_flow", archetypes)
        self.assertIn("casual_data_browse", archetypes)


if __name__ == "__main__":
    start = time.perf_counter()
    suite = unittest.TestLoader().loadTestsFromTestCase(TestSynapseFlowEngine)
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    elapsed = time.perf_counter() - start
    print(f"\n⚡ Total Deterministic Test Execution Time: {elapsed:.3f}s")
    sys.exit(0 if result.wasSuccessful() else 1)
