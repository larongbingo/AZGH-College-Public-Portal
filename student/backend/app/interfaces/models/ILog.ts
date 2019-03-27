
export interface ILog {
  /**
   * A short yet descriptive name of what type of event happened
   */
  event: string;

  /**
   * Describe what happened
   */
  description: string;

  /**
   * The student who started the event
   */
  studentId?: string;

  /**
   * Parameters that began the event
   */
  params?: string;
}
