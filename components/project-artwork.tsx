type ProjectArtworkProps = { slug: string; large?: boolean };

function Retail() {
  return (
    <svg viewBox="0 0 560 320" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.1" opacity=".45">
        <path d="M76 242h408M76 188h408M76 134h408M76 80h408" />
        <path d="M129 48v224M230 48v224M331 48v224M432 48v224" />
      </g>
      <g fill="currentColor">
        <rect x="100" y="171" width="59" height="71" rx="2" opacity=".32" />
        <rect x="201" y="134" width="59" height="108" rx="2" opacity=".5" />
        <rect x="302" y="102" width="59" height="140" rx="2" opacity=".7" />
        <rect x="403" y="151" width="59" height="91" rx="2" opacity=".9" />
      </g>
      <path
        d="m129 151 101-38 101-32 101 50"
        stroke="currentColor"
        strokeWidth="2"
      />
      <g fill="currentColor">
        <circle cx="129" cy="151" r="4" />
        <circle cx="230" cy="113" r="4" />
        <circle cx="331" cy="81" r="4" />
        <circle cx="432" cy="131" r="4" />
      </g>
    </svg>
  );
}

function Cities() {
  return (
    <svg viewBox="0 0 560 320" fill="none" aria-hidden="true">
      <g stroke="currentColor" opacity=".45">
        <path d="M80 74h400M80 132h400M80 190h400M80 248h400M128 46v226M204 46v226M280 46v226M356 46v226M432 46v226" />
      </g>
      <g stroke="currentColor" strokeWidth="2">
        <path d="m128 190 76-58 76 58 76-116 76 58" />
        <path d="m128 74 76 116 76-58 76 116 76-58" opacity=".5" />
      </g>
      <g fill="currentColor">
        <circle cx="128" cy="190" r="6" />
        <circle cx="204" cy="132" r="6" />
        <circle cx="280" cy="190" r="6" />
        <circle cx="356" cy="74" r="6" />
        <circle cx="432" cy="132" r="6" />
      </g>
      <circle cx="356" cy="74" r="24" stroke="currentColor" opacity=".7" />
    </svg>
  );
}

function Employees() {
  return (
    <svg viewBox="0 0 560 320" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2">
        <rect x="86" y="63" width="388" height="194" rx="3" opacity=".55" />
        <path
          d="M86 111h388M86 159h388M86 207h388M202 63v194M318 63v194M405 63v194"
          opacity=".45"
        />
      </g>
      <g fill="currentColor">
        <circle cx="146" cy="136" r="9" opacity=".85" />
        <circle cx="146" cy="184" r="9" opacity=".55" />
        <circle cx="146" cy="232" r="9" opacity=".35" />
        <path
          d="M225 131h64v9h-64zM225 179h88v9h-88zM225 227h57v9h-57z"
          opacity=".65"
        />
        <path
          d="M342 131h37v9h-37zM342 179h37v9h-37zM342 227h37v9h-37z"
          opacity=".4"
        />
      </g>
      <path
        d="m416 137 11 11 19-24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Netflix() {
  return (
    <svg viewBox="0 0 560 320" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4">
        <rect x="107" y="54" width="96" height="153" rx="3" opacity=".35" />
        <rect x="227" y="54" width="96" height="153" rx="3" opacity=".65" />
        <rect x="347" y="54" width="96" height="153" rx="3" opacity=".9" />
        <path d="M107 231h336M107 250h237" opacity=".5" />
      </g>
      <g fill="currentColor">
        <path d="m142 112 29 18-29 18v-36Z" opacity=".55" />
        <path d="m262 112 29 18-29 18v-36Z" opacity=".7" />
        <path d="m382 112 29 18-29 18v-36Z" />
      </g>
    </svg>
  );
}

function Crime() {
  return (
    <svg viewBox="0 0 560 320" fill="none" aria-hidden="true">
      <g stroke="currentColor" opacity=".44">
        <path d="M72 82h416M72 160h416M72 238h416M124 44v232M228 44v232M332 44v232M436 44v232" />
      </g>
      <g stroke="currentColor" strokeWidth="1.6">
        <circle cx="228" cy="160" r="58" opacity=".45" />
        <circle cx="228" cy="160" r="27" opacity=".75" />
        <path d="M228 102v-22M228 218v22M170 160h-22M286 160h22" />
      </g>
      <g fill="currentColor">
        <circle cx="228" cy="160" r="6" />
        <circle cx="383" cy="97" r="4" opacity=".6" />
        <circle cx="383" cy="216" r="4" opacity=".6" />
      </g>
    </svg>
  );
}

function Soccer() {
  return (
    <svg viewBox="0 0 560 320" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.3">
        <rect x="78" y="50" width="404" height="220" rx="2" />
        <path d="M280 50v220" />
        <circle cx="280" cy="160" r="52" />
        <rect x="78" y="101" width="70" height="118" />
        <rect x="412" y="101" width="70" height="118" />
        <path d="M78 136H58v48h20M482 136h20v48h-20" />
      </g>
      <g fill="currentColor">
        <circle cx="280" cy="160" r="5" />
        <circle cx="196" cy="103" r="5" opacity=".65" />
        <circle cx="381" cy="202" r="5" opacity=".65" />
      </g>
      <path
        d="m196 103 84 57 101 42"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="5 7"
        opacity=".55"
      />
    </svg>
  );
}

const artwork = {
  "retail-store-sales": Retail,
  "smart-cities": Cities,
  "messy-employee-dataset": Employees,
  "netflix-titles": Netflix,
  "crime-incidents": Crime,
  "soccer-match-scraper": Soccer,
};

export function ProjectArtwork({ slug, large = false }: ProjectArtworkProps) {
  const Artwork = artwork[slug as keyof typeof artwork] ?? Retail;
  return (
    <div
      className={`project-art project-art-${slug} ${large ? "project-art-large" : ""}`}
    >
      <Artwork />
    </div>
  );
}
