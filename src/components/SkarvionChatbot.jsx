import { useEffect, useRef, useState } from "react";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaDraftingCompass,
  FaHardHat,
  FaHome,
  FaBuilding,
  FaVolumeUp,
} from "react-icons/fa";

import "../css-modular/SkarvionChatbot.css";

const CHAT_LEAD_API = `${import.meta.env.VITE_API_BASE_URL}/api/chat-leads`;

const QUICK_OPTIONS = [
  {
    label: "House Planning",
    icon: <FaHome />,
    service: "Planning & Designing",
    building: "Residential Building",
  },
  {
    label: "Construction",
    icon: <FaHardHat />,
    service: "Construction",
    building: "Residential Building",
  },
  {
    label: "3D Elevation",
    icon: <FaDraftingCompass />,
    service: "3D Elevation",
    building: "Residential Building",
  },
  {
    label: "Commercial Building",
    icon: <FaBuilding />,
    service: "Construction",
    building: "Commercial Building",
  },
];

function playSkarvionChime() {
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
      784,
      context.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      1046,
      context.currentTime + 0.12
    );

    gain.gain.setValueAtTime(
      0.0001,
      context.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.06,
      context.currentTime + 0.02
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      context.currentTime + 0.22
    );

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.24);

    oscillator.addEventListener("ended", () => {
      context.close().catch(() => {});
    });
  } catch {
    // Audio is optional.
  }
}

function formatTime(date) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function SkarvionChatbot() {
const [open, setOpen] = useState(false);
const [input, setInput] = useState("");
const [soundOn, setSoundOn] = useState(true);
const [messages, setMessages] = useState([]);
const [showOnlinePrompt, setShowOnlinePrompt] = useState(false);

  const [leadStep, setLeadStep] = useState(null);

  const [lead, setLead] = useState({
    name: "",
    phone: "",
    email: "",
    serviceRequired: "",
    buildingType: "",
    state: "",
    district: "",
    city: "",
    projectSize: "",
    budget: "",
    expectedStart: "",
    projectDetails: "",
    preferredContactMethod: "",
  });

  const messagesRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
  const onlineTimer = setTimeout(() => {
    setShowOnlinePrompt(true);

    if (soundOn) {
      playSkarvionChime();
    }

    const hideTimer = setTimeout(() => {
      setShowOnlinePrompt(false);
    }, 7000);

    return () => clearTimeout(hideTimer);
  }, 3500);

  return () => clearTimeout(onlineTimer);
}, [soundOn]);

  useEffect(() => {
    if (!open || initialized.current) return;

    initialized.current = true;

    setMessages([
      {
        id: Date.now(),
        type: "bot",
        text:
          "Hi! I'm Skarvion AI. I'm online and ready to help with planning, design, construction and interiors.",
        time: formatTime(new Date()),
      },
    ]);

    if (soundOn) {
      setTimeout(playSkarvionChime, 250);
    }
  }, [open, soundOn]);

  useEffect(() => {
    if (!messagesRef.current) return;

    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-bot`,
        type: "bot",
        text,
        time: formatTime(new Date()),
      },
    ]);

    if (soundOn) {
      setTimeout(playSkarvionChime, 160);
    }
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-user`,
        type: "user",
        text,
        time: formatTime(new Date()),
      },
    ]);
  };

  const startLeadCollection = (option) => {
    setLead({
      name: "",
      phone: "",
      email: "",
      serviceRequired: option.service,
      buildingType: option.building,
      state: "",
      district: "",
      city: "",
      projectSize: "",
      budget: "",
      expectedStart: "",
      projectDetails: "",
      preferredContactMethod: "",
    });

    setLeadStep("name");

    addUserMessage(option.label);

    addBotMessage(
      "Great choice. Let's collect a few details so the Skarvion team can understand your project. What is your name?"
    );
  };

  const saveLead = async (finalLead) => {
    try {
      const response = await fetch(CHAT_LEAD_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalLead),
      });

      if (!response.ok) {
        throw new Error("Unable to save lead");
      }

      addBotMessage(
        "Thank you! Your project enquiry has been received successfully. Our Skarvion team will contact you soon."
      );

      setLeadStep(null);

      setLead({
        name: "",
        phone: "",
        email: "",
        serviceRequired: "",
        buildingType: "",
        state: "",
        district: "",
        city: "",
        projectSize: "",
        budget: "",
        expectedStart: "",
        projectDetails: "",
        preferredContactMethod: "",
      });

    } catch (error) {
      console.error("Chat lead submission error:", error);

      addBotMessage(
        "I couldn't save your enquiry right now. Please try again or use the phone/WhatsApp buttons on the website."
      );
    }
  };

  const processLeadMessage = async (cleanText) => {
    addUserMessage(cleanText);

    const updatedLead = { ...lead };

    switch (leadStep) {
      case "name":
        updatedLead.name = cleanText;
        setLead(updatedLead);
        setLeadStep("phone");

        addBotMessage(
          "Thanks! What is your phone number?"
        );
        return;

      case "phone":
        updatedLead.phone = cleanText;
        setLead(updatedLead);
        setLeadStep("email");

        addBotMessage(
          "Great. What is your email address? You can type 'skip' if you don't want to provide it."
        );
        return;

      case "email":
        updatedLead.email =
          cleanText.toLowerCase() === "skip"
            ? ""
            : cleanText;

        setLead(updatedLead);
        setLeadStep("state");

        addBotMessage(
          "Which state is your project located in?"
        );
        return;

      case "state":
        updatedLead.state = cleanText;
        setLead(updatedLead);
        setLeadStep("district");

        addBotMessage(
          "Which district is the project in?"
        );
        return;

      case "district":
        updatedLead.district = cleanText;
        setLead(updatedLead);
        setLeadStep("city");

        addBotMessage(
          "And which city or locality?"
        );
        return;

      case "city":
        updatedLead.city = cleanText;
        setLead(updatedLead);
        setLeadStep("projectSize");

        addBotMessage(
          "Approximately how large is your plot or project? For example, 1200 sq.ft."
        );
        return;

      case "projectSize":
        updatedLead.projectSize = cleanText;
        setLead(updatedLead);
        setLeadStep("budget");

        addBotMessage(
          "What is your approximate budget?"
        );
        return;

      case "budget":
        updatedLead.budget = cleanText;
        setLead(updatedLead);
        setLeadStep("expectedStart");

        addBotMessage(
          "When are you planning to start the project?"
        );
        return;

      case "expectedStart":
        updatedLead.expectedStart = cleanText;
        setLead(updatedLead);
        setLeadStep("projectDetails");

        addBotMessage(
          "Tell me briefly about your project requirements."
        );
        return;

      case "projectDetails":
        updatedLead.projectDetails = cleanText;
        setLead(updatedLead);
        setLeadStep("preferredContactMethod");

        addBotMessage(
          "How would you prefer the Skarvion team to contact you? Phone, WhatsApp, or Email?"
        );
        return;

      case "preferredContactMethod":
        updatedLead.preferredContactMethod = cleanText;

        setLead(updatedLead);
        setLeadStep("saving");

        await saveLead({
          ...updatedLead,
          preferredContactMethod: cleanText,
        });

        return;

      default:
        addBotMessage(
          "Please choose one of the project options above to begin."
        );
    }
  };

  const sendMessage = async (text) => {
    const cleanText = text.trim();

    if (!cleanText) return;

    setInput("");

    if (leadStep === "saving") return;

    if (!leadStep) {
      addUserMessage(cleanText);

      addBotMessage(
        "I'd be happy to help. Please choose the type of project you're planning below."
      );

      return;
    }

    await processLeadMessage(cleanText);
  };

 return (
  <>
    {/* Online invitation */}
    {showOnlinePrompt && !open && (
      <div className="skv-ai-online-prompt">
        <span className="skv-ai-online-prompt-dot" />

        <span>
          👋 I'm online right now — Chat with me!
        </span>

        <button
          type="button"
          onClick={() => setShowOnlinePrompt(false)}
          aria-label="Close online message"
        >
          ×
        </button>
      </div>
    )}

    <button
      type="button"
      className={`skv-ai-launcher ${
        open ? "open" : ""
      } ${showOnlinePrompt ? "attention" : ""}`}
      onClick={() => {
        setOpen((prev) => !prev);

        setShowOnlinePrompt(false);

        if (!open && soundOn) {
          setTimeout(playSkarvionChime, 100);
        }
      }}
      aria-label={
        open
          ? "Close Skarvion AI"
          : "Open Skarvion AI"
      }
    >
      <span className="skv-ai-launcher-glow" />

      {open ? <FaTimes /> : <FaRobot />}

      {!open && (
        <span className="skv-ai-online-dot" />
      )}
    </button>

    <aside
      className={`skv-ai-panel ${open ? "open" : ""}`}
      aria-hidden={!open}
    >
      <div className="skv-ai-header">
        <div className="skv-ai-brand">
          <div className="skv-ai-avatar">
            <FaRobot />
            <span />
          </div>

          <div>
            <strong>Skarvion AI</strong>

            <div className="skv-ai-status">
              <span className="skv-ai-status-dot" />
              Online
            </div>
          </div>
        </div>

        <button
          type="button"
          className="skv-ai-sound"
          onClick={() =>
            setSoundOn((prev) => !prev)
          }
          aria-label={
            soundOn
              ? "Turn sound off"
              : "Turn sound on"
          }
        >
          <FaVolumeUp
            style={{
              opacity: soundOn ? 1 : 0.35,
            }}
          />
        </button>
      </div>

      <div
        className="skv-ai-messages"
        ref={messagesRef}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`skv-ai-message-row ${
              message.type === "user"
                ? "user"
                : "bot"
            }`}
          >
            {message.type === "bot" && (
              <div className="skv-ai-mini-avatar">
                <FaRobot />
              </div>
            )}

            <div
              className={`skv-ai-message ${
                message.type === "user"
                  ? "user"
                  : "bot"
              }`}
            >
              <p>{message.text}</p>
              <small>{message.time}</small>
            </div>
          </div>
        ))}

        {!leadStep && messages.length <= 1 && (
          <div className="skv-ai-quick-area">
            <span className="skv-ai-quick-label">
              How can we help?
            </span>

            <div className="skv-ai-quick-grid">
              {QUICK_OPTIONS.map((option) => (
                <button
                  type="button"
                  key={option.label}
                  className="skv-ai-quick-btn"
                  onClick={() =>
                    startLeadCollection(option)
                  }
                >
                  <span>{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <form
        className="skv-ai-composer"
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage(input);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          placeholder={
            leadStep === "saving"
              ? "Saving your enquiry..."
              : leadStep
              ? "Type your answer..."
              : "Choose a project above..."
          }
          disabled={leadStep === "saving"}
          aria-label="Message Skarvion AI"
        />

        <button
          type="submit"
          aria-label="Send message"
          disabled={leadStep === "saving"}
        >
          <FaPaperPlane />
        </button>
      </form>

      <div className="skv-ai-footer">
        AI assistant • Skarvion Planning & Infrastructure
      </div>
    </aside>
  </>
);
}