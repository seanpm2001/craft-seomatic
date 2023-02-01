<?php

/**
 * SEOmatic plugin for Craft CMS 3
 *
 * A turnkey SEO implementation for Craft CMS that is comprehensive, powerful, and flexible
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2023 nystudio107
 */

namespace nystudio107\seomatic\models\jsonld;

/**
 * schema.org version: v15.0-release
 * Trait for TherapeuticProcedure.
 *
 * @author    nystudio107
 * @package   Seomatic
 * @see       https://schema.org/TherapeuticProcedure
 */
trait TherapeuticProcedureTrait
{
    /**
     * A dosing schedule for the drug for a given population, either observed,
     * recommended, or maximum dose based on the type used.
     *
     * @var DoseSchedule
     */
    public $doseSchedule;

    /**
     * Specifying a drug or medicine used in a medication procedure.
     *
     * @var Drug
     */
    public $drug;

    /**
     * A possible complication and/or side effect of this therapy. If it is known
     * that an adverse outcome is serious (resulting in death, disability, or
     * permanent damage; requiring hospitalization; or otherwise life-threatening
     * or requiring immediate medical attention), tag it as a
     * seriousAdverseOutcome instead.
     *
     * @var MedicalEntity
     */
    public $adverseOutcome;
}
